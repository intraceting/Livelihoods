#!/bin/bash -x

#Author: zpcoding<intraceting@outlook.com>
#
SHELL_PATH=$(cd `dirname $0`; pwd)
#
URI_FILE=$1
HOME_PATH=$2
TID=$3

function searchone()
{
	URL=$1
	FILE=$2
	DUMPURL=$3
	DUMPTXT=$4
	"${SHELL_PATH}/websearch.sh" "${URL}" "${FILE}" "${DUMPURL}" "${DUMPTXT}"
}

function onesearch()
{
	#
	URL=$1
	UUID=$2
	SAVEAS=$3
	#
	#
	searchone ${URL} "${SAVEAS}/${UUID}" "${SAVEAS}/${UUID}.url" "${SAVEAS}/${UUID}.txt"
	
}

function addtask()
{
	#
	TID=$(uuidgen)
	ARGV=$1
	#
	ltrcli -m 212 -o  "${TID}&1234&${ARGV}&0&1&1"
}

function uppgbar()
{
	#
	TID=$1
	PGBAR=$2
	#
	ltrcli -m 210 -o "${TID}&${PGBAR}"
}	
#
for URL in $(<${URI_FILE})
do
	#
	UUID=$(uuidgen)
	#
	SAVEAS=$(echo ${URL} | awk -F '://' '{print $2}' | awk -F '?' '{print $1}')
	SAVENM=$(echo ${URL} | md5sum |awk -F '[ -]' '{print $1}')
	#
	mkdir -p "${HOME_PATH}/${SAVEAS}/"
	#
	if [ ! -r "${HOME_PATH}/${SAVEAS}/${SAVENM}.url" ]
	then
	{
		#
		onesearch "${URL}" "${SAVENM}" "${HOME_PATH}/${SAVEAS}/"
		#
		if [ -r "${HOME_PATH}/${SAVEAS}/${SAVENM}.url" ]
		then 
			addtask "${SAVEAS}/${SAVENM}.url"
		fi
	} 
	fi
	#
	uppgbar "${TID}" "${SAVENM}"
done
