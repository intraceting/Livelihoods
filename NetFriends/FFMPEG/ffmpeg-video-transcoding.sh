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

#
${TSCMD} -v quiet -i "${SRC}" -vcodec h264 -s 1080*720 -f mp4 "${DST}"

