#!/bin/bash -x

#Author: zpcoding<intraceting@outlook.com>
#
SHELL_PATH=$(cd `dirname $0`; pwd)
#
URI_FILE=$1
HOME_PATH=$2

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
#
for URL in $(<${URI_FILE})
do
	#
	UUID=$(uuidgen)
	#
	POTO=$(echo ${URL} | awk -F '([/:]+)' '{ print $1 }')
	DOMAIN=$(echo ${URL} | awk -F '([/:?]+)' '{ print $2 }')
	PORT=$(echo ${URL} | awk -F '([/:?]+)' '{ print $3 }')
	#
	mkdir -p "${HOME_PATH}/${DOMAIN}/${UUID}/"
	#
	onesearch "${URL}" "${UUID}" "${HOME_PATH}/${DOMAIN}/${UUID}/"
	#
	if [ -r "${HOME_PATH}/${DOMAIN}/${UUID}/${UUID}.url" ]
	then 
		addtask "${DOMAIN}/${UUID}/${UUID}.url"
	fi 
done
