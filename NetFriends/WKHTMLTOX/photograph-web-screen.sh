#!/bin/bash
#
PWD=$(cd `dirname $0`;pwd)
#
screen_name=$(basename $0)  
#screen -dmS $screen_name 
#
nohupcmd="${PWD}/photograph-web.sh $1 $2 $3"
#screen -x -S $screen_name -p 0 -X stuff "$nohupcmd"
#screen -x -S $screen_name -p 0 -X stuff $'\n'

screen -d -m -S $screen_name  $nohupcmd

