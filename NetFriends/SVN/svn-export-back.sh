#!/bin/bash -x

#
if [ $# -ne 5 ]
then
        CMD=`basename $0`
        echo "Usage:${CMD} URI NAME USER PAWD CLEAN(+days)"
        exit 22
fi

#
function backup()
{
	#
	PWD_CUR=$(pwd)
	DATE_CUR=$(date +%F)
	#
	REP_URL="${1}/${2}/"
	REP_NAME=${2}
	REP_BACKNAME="${PWD_CUR}/${REP_NAME}_${DATE_CUR}"
	REP_BACKLOG="${PWD_CUR}/${REP_NAME}_${DATE_CUR}_update.trace.log"
	REP_USER=${3}
	REP_PAWD=${4}
	CLEAN_DAYS=${5}
	#
	if [ -d ${REP_BACKNAME} ]
	then
		echo "'${REP_BACKNAME}' already exists."
		exit 17
	fi
	#
	if [ -f ${REP_BACKLOG} ]
        then
                echo "'${REP_BACKLOG}' already exists."
                exit 17
        fi
	#
	svn export "${REP_URL}" "${REP_BACKNAME}" --trust-server-cert --non-interactive --no-auth-cache --username ${REP_USER} --password ${REP_PAWD} >  "${REP_BACKLOG}"
	#
	rc=$?
        if [ $rc != 0 ]
        then
        {
	        rm "${REP_BACKNAME}" -rf
		rm "${REP_BACKLOG}" -rf
	}
        else
	{
		#
		zip -rq -9 "${REP_NAME}_${DATE_CUR}.zip" "${REP_NAME}_${DATE_CUR}" "${REP_NAME}_${DATE_CUR}_update.trace.log"
		#
		rc=$?
		if [ $rc != 0 ]
		then
			exit $rc
		else
	        	#
			rm "${REP_BACKNAME}" -rf
			rm "${REP_BACKLOG}" -rf		
		       	#		 
		       	find "${PWD_CUR}/" -maxdepth 1 -mtime +${CLEAN_DAYS} -name "${REP_NAME}_*.zip" -exec rm -rf {} \;
		fi
	}
        fi
}



#
backup $1 $2 $3 $4 $5
