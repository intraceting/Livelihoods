#!/bin/bash -x

#
PWD_CUR=$(cd `dirname $0`; pwd)

BAK_CMD=$PWD_CUR"/svn-export-back.sh"

BAK_USER=******
BAK_PAWD=xxxxxx

function real_bak()
{
	cd $PWD_CUR/"$2"
	$BAK_CMD "$1" "$2" $BAK_USER $BAK_PAWD 5
}

real_bak "URI" "NAME"

real_bak "URI" "NAME"

real_bak "URI" "NAME"


