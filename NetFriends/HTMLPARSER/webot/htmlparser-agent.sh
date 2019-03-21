#!/bin/bash -x

#
SHELL_PATH=$(cd `dirname $0`; pwd)
#
WORKPWD="/mnt/9tb/aaaa/"
#
TID=$1
ARGV=$2
PGBAR=$3
#
"${SHELL_PATH}/urlparser.sh" "${WORKPWD}/${ARGV}" "${WORKPWD}/" "${TID}" 
