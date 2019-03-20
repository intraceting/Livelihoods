#!/bin/bash -x

#Author: zpcoding<intraceting@outlook.com>
#
SHELL_PATH=$(cd `dirname $0`; pwd)
#
HPCMD="${SHELL_PATH}/htmlparser.sh"
#
HOME_PATH="${SHELL_PATH}/htmlparser/"
#
if [ "$#" == "1" ]
then
	HOME_PATH=$1
fi
#
for (( i = 0 ; i < 1 ; i ))
do
{
	URL_FILE=$(ls ${HOME_PATH}/*.url -tr |head -n 1)
	if [ -r ${URL_FILE} ]
	then
		${HPCMD} "${URL_FILE}" "${HOME_PATH}"
		mv "${URL_FILE}" "${URL_FILE}.back"
	else
		exit 1;	
	fi
}
done

