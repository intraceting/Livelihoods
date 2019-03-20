#!/bin/bash -x

#Author: zpcoding<intraceting@outlook.com>
#
SHELL_PATH=$(cd `dirname $0`; pwd)
#
WSCMD="${SHELL_PATH}/websearch.sh"
#
URI_FILE=$1
HOME_PATH="${SHELL_PATH}/htmlparser/"
#
if [ "$#" == "2" ]
then
	HOME_PATH=$2
fi
#

#
for URL in $(<${URI_FILE})
do
	#
	UUID=$(uuidgen)
	#
	${WSCMD} ${URL} ${UUID} ${HOME_PATH}

done
