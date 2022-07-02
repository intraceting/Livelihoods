#!/bin/bash -x
#
# Transcode VIDEO to h.264-encoded MP4 files using VLC
# Wout.Mertens@gmail.com
# zpcoding<intraceting@outlook.com>

#
TSCMD=`which ffmpeg`

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

#生成hls分片(直播):
${TSCMD} -v quiet -i "${SRC}"  -s 480*320 -c:v libx264 -c:a aac -f hls -hls_list_size 10 -hls_wrap 15 "${DST}"

