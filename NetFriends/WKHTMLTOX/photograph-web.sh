#!/bin/bash
#
xhost +
#
PWD=$(cd `dirname $0`;pwd)
#
POTO=$2
if [ "${POTO}" != "" ]
then
	if [ "${POTO}" != "http" ] && [ "${POTO}" != "https" ]
	then
		echo "Only 'http' and 'https'."
		exit 22
	else
	POTO="${POTO}://"
	fi
fi
#
URLS=$1
if [ ! -r ${URLS} ]
then
	echo "'${URLS}' file cannot be accessed."
	exit 22
else
URLS=$(realpath ${URLS})
fi
#
STOR=$3
if [ "${STOR}" != "" ]
then
	if [ ! -d ${STOR} ] || [ ! -w ${STOR} ]
	then
        	echo "'${STOR}' file cannot be accessed."
		exit 22
	else
	STOR=$(realpath ${STOR})
	fi
else
STOR="${PWD}/data/"
fi



#
while [ 1 ]
do
	#
	for LINSTR in `cat ${URLS}`
	do
	${PWD}/archivehtml.sh "${POTO}${LINSTR}" "${STOR}"
	done
	#
	sleep 1800
done
