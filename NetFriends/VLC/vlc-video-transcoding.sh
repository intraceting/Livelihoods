#!/bin/bash
#
# Transcode VIDEO to h.264-encoded MP4 files using VLC
# Wout.Mertens@gmail.com
# zpcoding<intraceting@outlook.com>

#
VLC=`which vlc`
# 16:9 or 4:3
aspect=16:9

# PAL (Europe) or NTSC (US)
src=PAL

# video bitrate
bitrate=1024

# audio bitrate
arate=128

# cropping?
crop=yes

# Deinterlace?
deint=yes

#### Program, do not change below this line ####
usage() {
	cat 1>&2 <<EOF
Usage: $0 [-swpncC] [-b <rate>] [-a <rate>] <DVB source .mpg> <MP4 output file>
	-s	4:3 aspect ratio (default=$aspect)
	-w	16:9 aspect ratio
	-p	PAL (720x576) input (default=$src)
	-n	NTSC (720x480) input
	-c	Crop borders (default=$crop)
	-C	Do not crop borders
	-d	Perform de-interlacing (default=$deint)
	-D	Do not perform de-interlacing
	-b	video bitrate kb/s (default=$bitrate)
	-a	audio bitrate kb/s (default=$arate)
EOF
	exit 1
}

error() {
	echo "ERROR: $*" 1>&2
	exit 2
}


while getopts 'swpncCb:a:h' opt; do
	case $opt in
		s) aspect=4:3 ;;
		w) aspect=16:9 ;;
		p) src=PAL ;;
		n) src=NTSC ;;
		c) crop=yes ;;
		C) crop=no ;;
		d) deint=yes ;;
		D) deint=no ;;
		b) bitrate=$OPTARG ;;
		a) arate=$OPTARG ;;
		h) usage ;;
		*) echo "Unknown option $opt" 1>&2; usage ;;
	esac
done
shift $(( $OPTIND - 1 ))

[ $# -ne 2 ] && usage

infile="$1"
outfile="$2"
case $outfile in
	*.mp4|*.MP4) : ;;
	*) outfile="$outfile.mp4" ;;
esac

[ -r "$infile" ] || error "Can't read from $infile"

case "$src,$aspect,$crop" in
	PAL,16:9,yes) sizestr="cropleft=31,cropright=31,croptop=16,cropbottom=16,width=960,height=544" ;;
	PAL,4:3,yes)  sizestr="cropleft=31,cropright=31,croptop=16,cropbottom=16,width=720,height=544" ;;
	NTSC,16:9,yes) sizestr="cropleft=30,cropright=30,croptop=17,cropbottom=17,width=800,height=448" ;;
	NTSC,4:3,yes) sizestr="cropleft=26,cropright=26,croptop=17,cropbottom=17,width=608,height=448" ;;
	PAL,16:9,no) sizestr="width=1024,height=576" ;;
	PAL,4:3,no) sizestr="width=768,height=576" ;;
	NTSC,16:9,no) sizestr="width=800,height=448" ;;
	NTSC,4:3,no) sizestr="width=608,height=448" ;;
	*) error "Could not handle $src,$aspect,$crop. This shouldn't happen!" ;;
esac

if [ "$deint" = "yes" ]; then
	deintstr=",deinterlace=enable"
else
	deintstr=
fi

# Let's do it
echo "Input file: $infile"
echo "Output file: $outfile"
echo "Encoding at $bitrate+$arate kb/s, input $src, $aspect, cropping $crop, de-interlace $deint"
echo
echo '>>>' $VLC -I dummy "$infile" --sout "#transcode{$sizestr$deintstr,vcodec=h264,vb=$bitrate, acodec=mpga,ab=$arate,channels=2,samplerate=44100}:standard{mux=mp4,dst=\"$outfile\",access=file}" vlc://quit
echo
$VLC -I dummy "$infile" --sout "#transcode{$sizestr$deintstr,vcodec=h264,vb=$bitrate, acodec=mpga,ab=$arate,channels=2,samplerate=44100}:standard{mux=mp4,dst=\"$outfile\",access=file}" vlc://quit

