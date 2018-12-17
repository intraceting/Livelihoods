#!/bin/bash -x
###
screen_name=`date +%FT%T`  
#screen -dmS $screen_name 
##
nohupcmd="${1}"
#screen -x -S $screen_name -p 0 -X stuff "$nohupcmd"
#screen -x -S $screen_name -p 0 -X stuff $'\n'
##
screen -d -m -S $screen_name  $nohupcmd

