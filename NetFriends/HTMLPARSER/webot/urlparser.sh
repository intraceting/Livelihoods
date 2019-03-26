#!/bin/bash

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
	BBBB=$3
	#
	#
	searchone ${URL} "${BBBB}/${UUID}" "${BBBB}/${UUID}.url" "${BBBB}/${UUID}.txt"
	
}

function addtask()
{
	#
	TID2=$(uuidgen)
	ARGV=$1
	#
	ltrcli -m 114 -o  "${TID2}&1234&${ARGV}&0&1&1"
}

function uppgbar()
{
	#
	TID3=$1
	PGBAR=$2
	#
	ltrcli -m 112 -o "${TID3}&${PGBAR}"
}


function eeee()
{
#
URI_FILE=$1
HOME_PATH=$2
TID=$3
#
for URL in $(<${URI_FILE})
do
	#
	#
	AAAA=$(echo ${URL} | awk -F '://' '{print $2}' | awk -F '?' '{print $1}')
	SAVENM=$(echo ${URL} | md5sum |awk -F '[ -]' '{print $1}')
	#
	mkdir -p "${HOME_PATH}/${AAAA}/"
	#
	if [ ! -r "${HOME_PATH}/${AAAA}/${SAVENM}.url" ]
	then
	{
		#
		onesearch "${URL}" "${SAVENM}" "${HOME_PATH}/${AAAA}/"
		#
		if [ -r "${HOME_PATH}/${AAAA}/${SAVENM}.url" ]
		then 
			addtask "${AAAA}/${SAVENM}.url"
		else
			echo "${AAAA}"
			echo "${HOME_PATH}"
		fi
	} 
	fi
	#
	uppgbar "${TID}" "${SAVENM}"
done

}
#
eeee ${URI_FILE} ${HOME_PATH}  ${TID}
