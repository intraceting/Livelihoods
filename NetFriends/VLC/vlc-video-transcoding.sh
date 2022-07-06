#!/bin/bash -x
#
# Transcode VIDEO to h.264-encoded MP4 files using VLC
# Wout.Mertens@gmail.com
# zpcoding<intraceting@outlook.com>

#
TSCMD=`which vlc`

#
SRC="$1"
DST="$2"
case ${DST} in
	*.mp4|*.MP4) : ;;
	*) DST="${DST}.mp4" ;;
esac
#
if [ ! -r "${SRC}" ] 
then
{
	echo "Can't read from '${SRC}'"
	exit 2
} 
fi

#
DST_PPWD=`dirname ${DST}`
DST_NAME=`basename ${DST}`
#
if [ ! -w "${DST_PPWD}" ] 
then
{
	echo "Can't write '${DST_NAME}' into '${DST_PPWD}'"
	exit 1
} 
fi

#
$TSCMD -I dummy "${SRC}" --sout "#transcode{width=1080,height=720,vcodec=h264}:standard{mux=mp4,dst=\"${DST}\",access=file}" vlc://quit

