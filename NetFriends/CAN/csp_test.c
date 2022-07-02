#include <errno.h>
#include <signal.h>
#include <stdio.h>
#include <string.h>
#include <sys/resource.h>
#include <sys/time.h>
#include <sys/types.h>
#include <unistd.h>
#include <time.h>
#include <sys/mman.h>
#include <malloc.h>
#include <stdlib.h>

/****************************************************************************/

#include "ecrt.h"

/****************************************************************************/

// Application parameters
#define FREQUENCY      1000
#define CLOCK_TO_USE   CLOCK_REALTIME

/****************************************************************************/

#define NSEC_PER_SEC (1000000000L)
#define PERIOD_NS (NSEC_PER_SEC / FREQUENCY)

#define DIFF_NS(A, B) (((B).tv_sec - (A).tv_sec) * NSEC_PER_SEC + \
	(B).tv_nsec - (A).tv_nsec)

#define TIMESPEC2NS(T) ((uint64_t) (T).tv_sec * NSEC_PER_SEC + (T).tv_nsec)

/****************************************************************************/
static ec_master_t *master = NULL;
static ec_domain_t *domain = NULL;

/****************************************************************************/
static ec_slave_config_t *sc  = NULL;
static ec_slave_config_t *sc2  = NULL;

/****************************************************************************/

// process data
static uint8_t *domain_pd = NULL;

//signal to turn off servo on state
static unsigned int run = 1;
static int cur_position;
static int cur_status;
static int cur_position2;
static int cur_status2;
const struct timespec cycletime = {0, PERIOD_NS};

/*****************************************************************************/
#define SlavePos       0,0 
#define DELTAINFO      0x00004321, 0x00008100 //pid vid 
#define SlavePos2      0,1 
#define DELTAINFO2      0x00004321, 0x00008100 //pid vid 

struct DELTA_offset
{
   //RxPDO
   unsigned int control_word;
   unsigned int target_position;
   unsigned int modes_operation;

   //TxPDO
   unsigned int status_word;
   unsigned int position_actual_value;
   unsigned int modes_of_operation_display;
};

typedef struct DELTA_offset OFFSET;

static OFFSET offset;
static OFFSET offset2;

const static ec_pdo_entry_reg_t domain_regs[] = {
    //RxPDO
    {SlavePos, DELTAINFO, 0x6040, 0, &offset.control_word},
    {SlavePos, DELTAINFO, 0x607A, 0, &offset.target_position},
    {SlavePos, DELTAINFO, 0x6060, 0, &offset.modes_operation},

    //TxPDO
    {SlavePos, DELTAINFO, 0x6041, 0, &offset.status_word},
    {SlavePos, DELTAINFO, 0x6064, 0, &offset.position_actual_value},
    {SlavePos, DELTAINFO, 0x6061, 0, &offset.modes_of_operation_display},
//-------slave2-----------
    //RxPDO
    {SlavePos2, DELTAINFO2, 0x6040, 0, &offset2.control_word},
    {SlavePos2, DELTAINFO2, 0x607A, 0, &offset2.target_position},
    {SlavePos2, DELTAINFO2, 0x6060, 0, &offset2.modes_operation},

    //TxPDO
    {SlavePos2, DELTAINFO2, 0x6041, 0, &offset2.status_word},
    {SlavePos2, DELTAINFO2, 0x6064, 0, &offset2.position_actual_value},
    {SlavePos2, DELTAINFO2, 0x6061, 0, &offset2.modes_of_operation_display},
    {}
};

static ec_pdo_entry_info_t DELTA_pdo_entries[] = {
    //RxPDO
    {0x6040, 0x00, 16},
    {0x607A, 0x00, 32},
    {0x6060, 0x00, 8}, 
    //TxPDO
    {0x6041, 0x00, 16},
    {0x6064, 0x00, 32},
    {0x6061, 0x00, 8},
};

static ec_pdo_info_t DELTA_pdos[] = {
    //RxPdo
    {0x1600, 3, DELTA_pdo_entries + 0 },
    //TxPdo
    {0x1A00, 3, DELTA_pdo_entries + 3 }
};

static ec_sync_info_t DELTA_syncs[] = {
    /*{ 0, EC_DIR_OUTPUT, 0, NULL, EC_WD_DISABLE },
    { 1, EC_DIR_INPUT, 0, NULL, EC_WD_DISABLE },*/
    { 2, EC_DIR_OUTPUT, 1, DELTA_pdos + 0/*,EC_WD_ENABLE*//*, EC_WD_DISABLE*/ },
    { 3, EC_DIR_INPUT, 1, DELTA_pdos + 1/*,EC_WD_DISABLE*//*, EC_WD_DISABLE*/ },
    { 0xFF }
};

/*****************************************************************************/

struct timespec timespec_add(struct timespec time1, struct timespec time2)
{
    struct timespec result;

    if ((time1.tv_nsec + time2.tv_nsec) >= NSEC_PER_SEC)
    {
        result.tv_sec = time1.tv_sec + time2.tv_sec + 1;
        result.tv_nsec = time1.tv_nsec + time2.tv_nsec - NSEC_PER_SEC;
    }
    else
    {
        result.tv_sec = time1.tv_sec + time2.tv_sec;
        result.tv_nsec = time1.tv_nsec + time2.tv_nsec;
    }

    return result;
}

/*****************************************************************************/

void endsignal(int sig)
{
    run = 0;
    printf("EtherCAT stop.\n");
    signal( SIGINT, SIG_DFL );
}

/****************************************************************************/

void cyclic_task()
{
    uint32_t target_position = 0;
    uint32_t target_position2 = 0;
    int once = 0;
    int i = 0;
    uint32_t Add_position = 0;

    struct timespec wakeupTime,time;

    while(run)
    {
    	   clock_gettime(CLOCK_TO_USE, &wakeupTime);
        wakeupTime = timespec_add(wakeupTime, cycletime);
        clock_nanosleep(CLOCK_TO_USE, TIMER_ABSTIME, &wakeupTime, NULL);
	   ecrt_master_application_time(master,TIMESPEC2NS(wakeupTime));

        ecrt_master_receive(master);
        ecrt_domain_process(domain);

        cur_status = EC_READ_U16(domain_pd + offset.status_word);
        cur_status2 = EC_READ_U16(domain_pd + offset2.status_word);
        cur_position = EC_READ_U32(domain_pd + offset.position_actual_value);
        cur_position2 = EC_READ_U32(domain_pd + offset2.position_actual_value);

        EC_WRITE_U8(domain_pd + offset.modes_operation, 8);
        EC_WRITE_U8(domain_pd + offset2.modes_operation, 8);

        if(((cur_status & 0x004f) == 0x0040) && ((cur_status2 & 0x004f) == 0x0040))
        {
          EC_WRITE_U16(domain_pd + offset.control_word, 0x0006);
          EC_WRITE_U16(domain_pd + offset2.control_word, 0x0006);
        	if(once == 0)
        	{
           	 	target_position = cur_position;
           	 	target_position2 = cur_position2;
           	 	once++;
        	}
        }
        else if(((cur_status & 0x006f) == 0x0021) && ((cur_status2 & 0x006f) == 0x0021))
        {
            EC_WRITE_U16(domain_pd + offset.control_word, 0x0007);
            EC_WRITE_U16(domain_pd + offset2.control_word, 0x0007);
        }
        else if(((cur_status & 0x06f) == 0x023) && ((cur_status2 & 0x006f) == 0x0023))
        {
            EC_WRITE_U16(domain_pd + offset.control_word, 0x000f);
            EC_WRITE_U16(domain_pd + offset2.control_word, 0x000f);
        }
        else if(((cur_status & 0x06f) == 0x027) && ((cur_status2 & 0x06f) ==0x027))
        {

            EC_WRITE_S32(domain_pd + offset.target_position, target_position);
            EC_WRITE_S32(domain_pd + offset2.target_position, target_position);
            EC_WRITE_U16(domain_pd + offset.control_word, 0x001f);
            EC_WRITE_U16(domain_pd + offset2.control_word, 0x001f);
		}
			if((cur_status == 0x1237) && (cur_status2 == 0x1237))
			{
				if(i<100)
				{
					Add_position+=1;	
				}
				if((i>300)&&(i<=400))
				{
					Add_position-=1;	
				}
				i++;
					if(i == 400)
						{
							exit(0);
							printf("-----------\n");
						}
       		 }

        		target_position += Add_position;
        		target_position2 += Add_position;
        		//target_position += 100;

		clock_gettime(CLOCK_TO_USE, &time);
		ecrt_master_application_time(master, TIMESPEC2NS(time));
		ecrt_master_sync_reference_clock(master);
          ecrt_master_sync_slave_clocks(master);

        ecrt_domain_queue(domain);
        ecrt_master_send(master);
    }
}

/****************************************************************************/

int main(int argc, char **argv)
{
    if (mlockall(MCL_CURRENT | MCL_FUTURE) == -1) 
   {
		perror("mlockall failed");
		return -1;
    }

    master = ecrt_request_master(0);
    if (!master)
    {
        return -1;
    }
    domain = ecrt_master_create_domain(master);
    if (!domain)
    {
        return -1;
    }

    if (!(sc = ecrt_master_slave_config(master, SlavePos, DELTAINFO)))
    {
        fprintf(stderr, "Failed to get slave configuration.\n");
        return -1;
//-----slave2---------
    }
    if (!(sc2 = ecrt_master_slave_config(master, SlavePos2, DELTAINFO2)))
    {
        fprintf(stderr, "Failed to get slave configuration.\n");
        return -1;
    }

    printf("Configuring PDOs...\n");
	
    if (ecrt_slave_config_pdos(sc, EC_END, DELTA_syncs))
    {
        fprintf(stderr, "Failed to configure PDOs.\n");
        return -1;
    }
    if (ecrt_slave_config_pdos(sc2, EC_END, DELTA_syncs))
    {
        fprintf(stderr, "Failed to configure PDOs.\n");
        return -1;
    }

    if (ecrt_domain_reg_pdo_entry_list(domain, domain_regs))
    {
        fprintf(stderr, "Slave PDO entry registration failed!\n");
        return -1;
    }

    ecrt_slave_config_dc(sc, 0x0300, 1000000, 1000000/2, 0, 0);
    ecrt_slave_config_dc(sc2, 0x0300, 1000000, 1000000/2, 0, 0);

    printf("Activating master...\n");
	
    if (ecrt_master_activate(master))
    {
        return -1;
    }

    if (!(domain_pd = ecrt_domain_data(domain)))
    {
        return -1;
    }
    	
    pid_t pid = getpid();
    if (setpriority(PRIO_PROCESS, pid, -20))
    {
        fprintf(stderr, "Warning: Failed to set priority: %s\n",strerror(errno));
    }

    signal( SIGINT , endsignal );
	printf("Starting cyclic function.\n");
printf("---%d\n",*master);

    cyclic_task();
	ecrt_release_master(master);
	
    return 0;
}
