#!/bin/bash


#
function htmlto()
{
#
SRC=$1
DST=$2
LOG=$3
#
wkhtmltopdf  --javascript-delay 60000 --no-stop-slow-scripts  --page-size "A2" --load-error-handling "skip" -q  "${SRC}" "${DST}"  >> ${LOG} 2>&1
}

function download()
{
#
SRC_URL=$1
DST_FILE=$2
LOG_FILE=$3
#
if [ "${LOG_FILE}" == "" ] || [ ! -w ${LOG_FILE} ]
then
LOG_FILE="/dev/null"
fi
#
echo "Download(begin): '${SRC_URL}'" >> ${LOG_FILE}
echo ">>" >> ${LOG_FILE}
htmlto ${SRC_URL} ${DST_FILE} ${LOG_FILE}
echo "<<" >> ${LOG_FILE}
echo "Download(end..): '${SRC_URL}'" >> ${LOG_FILE}
}
#
SRC_URLFULL=$1
SRC_POTO=$(echo ${SRC_URLFULL} | awk -F '://' '{printf $1}')
SRC_HOSTNAME=$(echo ${SRC_URLFULL} | awk -F '://' '{printf $2}'|awk -F '/+' '{printf $1}')
#
if [ "${SRC_URLFULL}" = "" ]
then
echo "@URL is not allowed to be empty."
exit 22
fi
#
if [ ! "${SRC_POTO}" = "http" ] && [ ! "${SRC_POTO}" = "https" ] 
then
echo "@URL  is prefixed with 'http' or 'https'."
exit 22
fi
#
if [ "${SRC_HOSTNAME}" = "" ]
then
echo "@URL is missing a domain name or IP address."
exit 22
fi
#
DST_PATHFILE=""
#
if [ ! -f "$2" ]
then
{
	DST_PATHNAME=""
	if [ ! "$2" = "" ]
	then
	DST_PATHNAME=$(dirname $2)
	fi
	#
	if [ ! -w "${DST_PATHNAME}" ]
	then
	echo "No access to '${DST_PATHNAME}'."
	exit 1 
	else
	DST_PATHFILE=$(realpath $2)
	fi
}
else
{
DST_PATHFILE=$(realpath $2)
}
fi

download ${SRC_URLFULL} ${DST_PATHFILE} $3

