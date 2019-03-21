#!/bin/bash -x

#
SHELL_PATH=$(cd `dirname $0`; pwd)
#
WORKPWD="/mnt/9tb/htmlparser/"
#
TID=$1
SRC=`echo $2 |cut -d '=' -f 1`
DST=`echo $2 |cut -d '=' -f 2`
PGBAR=$3
#
su -l zpcoding -c "${SHELL_PATH}/video-to-mp4.sh $1 ${WORKPWD}/${SRC} ${WORKPWD}/${DST} ${PGBAR}"
