#!/bin/bash

#
SRC=$1
DST=$2
EXT=$3
if [ "${EXT}" = "" ]
then
EXT="pdf"
else
EXT=$(echo ${EXT} |tr [A-Z] [a-z]) 
fi
#
if [ ! "${EXT}" = "pdf" ] && [ ! "${EXT}" = "png" ]
then
echo "Only supports PDF and PNG formats."
exit 22
fi
#
SRC_PATH=$(echo ${SRC} |awk -F "://" '{printf $2}')
#
DST_PATH="${DST}/${SRC_PATH}/$(date +%F)/"
DST_FILE="${DST_PATH}/$(date +%FT%TZ%z).${EXT}"
#
mkdir -p "${DST_PATH}"
#
echo "Archive:'${SRC}' to '${DST_FILE}'" >> "${DST_PATH}/log.txt"
if [ "${EXT}" = "pdf" ]
then
htmltopdf.sh "${SRC}" "${DST_FILE}" "${DST_PATH}/log.txt"
elif [ "${EXT}" = "png" ]
then
htmltopng.sh "${SRC}" "${DST_FILE}" "${DST_PATH}/log.txt"
else
echo "An error has occurred."
echo ">>"
echo "SRC: '${SRC}'"
echo "DST: '${DST}'"
echo "EXT: '${EXT}'"
echo "<<"
exit 22
fi

