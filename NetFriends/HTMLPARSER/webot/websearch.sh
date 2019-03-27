#!/bin/bash

#Author: zpcoding<intraceting@outlook.com>
#
SHELL_PATH=$(cd `dirname $0`; pwd)
#
URL=$1
FILE=$2
DUMPURL=$3
DUMPTXT=$4
HEAD="/tmp/$(uuidgen)"



function download()
{
	FILE=$1
	URL=$2
	HEAD=$3
	#
	curl --connect-timeout 3-m 30  --max-redirs 3 --max-filesize 8388608 --location-trusted -o ${FILE} ${URL} -D ${HEAD}
}

function get_status()
{
	HEAD=$1
	grep "HTTP/" ${HEAD} |tail -n 1 |cut -d ' '  -f 2
}

function get_charset()
{
	HEAD=$1
	grep "Content-Type:" ${HEAD} | tail -n 1 |cut -d ' '  -f 3 | cut -d '=' -f 2
}

function test_html_text()
{
	HEAD=$1
	grep "Content-Type:" ${HEAD} | tail -n 1 |grep -i "text/html"
}

function parse_url()
{
	FILE=$1
	FROM=$2
	DUMP=$3
	URI=$4
	htmlparser -F "${FROM}" -T "UTF-8" "${FILE}" -t "meta&script&style&link" -1 n -a "src&href&url" -3 Yes -E "javascript"  -7 ${URI} -o "${DUMP}"
}

function parse_charset()
{
	FILE=$1
	CHARSET=$(htmlparser "${FILE}" -t "meta" -a "charset" -3 YES)
	#
	if [ "${CHARSET}" = "" ]
	then
		CHARSET=$(htmlparser "${FILE}" -t "meta" -a "content" -3 YES |grep "charset="|head -n 1 |awk -F '[; ]' '{print $2;}' |awk -F '[= ]' '{print $2;}')
	fi
	#
	echo ${CHARSET}
}

function parse_txt()
{
	FILE=$1
	FROM=$2
	DUMP=$3
	htmlparser -F "${FROM}" -T "UTF-8" -o "${DUMP}" "${FILE}" -t "meta&script&style&link" -1 n -a "~&" -3 Yes 
}
#
download ${FILE} ${URL} ${HEAD}

if [ ! -r ${FILE} ]  
then
	echo "'${URL}' can't access!"
	exit 1;
fi


if [ ! -r ${HEAD} ]
then
	echo "'${URL}' can't access!"
	exit 1;
fi

#
STATUS=$(get_status ${HEAD})
#
if [[ ! "${STATUS}" = "200" ]] && [[ ! "${STATUS}" = "206" ]]
then
	echo "Status:${STATUS} nonsupport."
	exit 2;
fi

#
CHARSET=$(get_charset ${HEAD})
#
if [ "${CHARSET}" = "" ]
then
	CHARSET=$(parse_charset ${FILE})
fi
#
if [ "${CHARSET}" = "" ]
then
	CHARSET="UTF-8"
fi
#
ISHTML=$(test_html_text ${HEAD})
if [ ! "${ISHTML}" = "" ]
then
	#
	parse_url "${FILE}"  "${CHARSET}" "${DUMPURL}" "${URL}"
	#
	parse_txt "${FILE}" "${CHARSET}" "${DUMPTXT}"
fi
#
rm -f ${HEAD}

