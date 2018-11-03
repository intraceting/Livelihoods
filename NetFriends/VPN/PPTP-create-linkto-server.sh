#!/bin/bash
#    PPTP VPN for CentOS7 or Redhat7
#
#    Copyright (C) 2018 zpcoding<intraceting@outlook.com>  and contributors
#
#    This program is free software; you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation; either version 2 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.


yum install -y NetworkManager-pptp*
#
pptpsetup --create Txxxxxx --server VPN-IP --username USER --password PASSWD --encrypt --start

#
ip route replace default dev ppp0

#
cat >> /etc/resolv.conf <<EOF
nameserver  8.8.8.8
nameserver  8.8.4.4
nameserver  4.4.4.4
EOF

#test VPN line
traceroute 8.8.8.8 



