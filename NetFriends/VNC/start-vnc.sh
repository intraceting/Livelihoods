#!/bin/bash -x
#
USERNAME=`whoami` 
#
sudo /usr/sbin/runuser -l $USERNAME -c /usr/bin/vncserver :1
