#!/bin/bash
# Script for automatic setup of an IPsec VPN server on CentOS/RHEL 6 and 7.
# Works on any dedicated server or virtual private server (VPS) except OpenVZ.
#
# DO NOT RUN THIS SCRIPT ON YOUR PC OR MAC!
#
# The latest version of this script is available at:
# https://github.com/hwdsl2/setup-ipsec-vpn
#    
# Copyright (C) 2015-2018 Lin Song <linsongui@gmail.com>
# Based on the work of Thomas Sarlandie (Copyright 2012)
# Copyright (C) 2018 zpcoding<intraceting@outlook.com>  and contributors
#
# This work is licensed under the Creative Commons Attribution-ShareAlike 3.0
# Unported License: http://creativecommons.org/licenses/by-sa/3.0/
#
# Attribution required: please include my name in any derivative and let me
# know how you have improved it!

#
CUR_DATATIME=`date +%FT%T`

#Backup Function
Conf_backup() { /bin/cp -f "$1" "$1.SHsaved.$CUR_DATATIME" 2>/dev/null; }

#
yum install -y make gcc gmp-devel xmlto bison flex xmlto libpcap-devel lsof vim-enhanced man
#
yum install -y xl2tpd libreswan 

#
L2TP_NET=${VPN_L2TP_NET:-'192.168.3.0/24'}
L2TP_LOCAL=${VPN_L2TP_LOCAL:-'192.168.3.1'}
L2TP_POOL=${VPN_L2TP_POOL:-'192.168.3.10-192.168.3.250'}
XAUTH_NET=${VPN_XAUTH_NET:-'192.168.4.0/24'}
XAUTH_POOL=${VPN_XAUTH_POOL:-'192.168.4.10-192.168.4.250'}
DNS_SRV1=${VPN_DNS_SRV1:-'8.8.8.8'}
DNS_SRV2=${VPN_DNS_SRV2:-'4.4.4.4'}

#Backup
Conf_backup "/etc/ipsec.conf"
#Setup IPsec config
cat > /etc/ipsec.conf  <<EOF
config setup
  virtual-private=%v4:10.0.0.0/8,%v4:192.168.0.0/16,%v4:172.16.0.0/12,%v4:!$L2TP_NET,%v4:!$XAUTH_NET
  protostack=netkey
  interfaces=%defaultroute
  uniqueids=no

conn shared
  left=%defaultroute
  leftid=$PUBLIC_IP
  right=%any
  encapsulation=yes
  authby=secret
  pfs=no
  rekey=no
  keyingtries=5
  dpddelay=30
  dpdtimeout=120
  dpdaction=clear
  ike=aes256-sha2,aes128-sha2,aes256-sha1,aes128-sha1,aes256-sha2;modp1024,aes128-sha1;modp1024
  phase2alg=aes_gcm-null,aes256-sha2_512,aes256-sha2,aes128-sha2,aes256-sha1,aes128-sha1
  sha2-truncbug=yes

conn l2tp-psk
  auto=add
  leftprotoport=17/1701
  rightprotoport=17/%any
  type=transport
  phase2=esp
  also=shared

conn xauth-psk
  auto=add
  leftsubnet=0.0.0.0/0
  rightaddresspool=$XAUTH_POOL
  modecfgdns="$DNS_SRV1, $DNS_SRV2"
  leftxauthserver=yes
  rightxauthclient=yes
  leftmodecfgserver=yes
  rightmodecfgclient=yes
  modecfgpull=yes
  xauthby=file
  ike-frag=yes
  ikev2=never
  cisco-unity=yes
  also=shared

EOF

#Specify IPsec PSK
Conf_backup "/etc/ipsec.secrets"
cat > /etc/ipsec.secrets <<EOF
#include /etc/ipsec.d/*.secrets
%any  %any  : PSK "doubleQ!@#"
EOF

# Create xl2tpd config
Conf_backup "/etc/xl2tpd/xl2tpd.conf"
cat > /etc/xl2tpd/xl2tpd.conf <<EOF
[global]
port = 1701
;ipsec saref = yes
auth file = /etc/ppp/chap-secrets
[lns default]
ip range = $L2TP_POOL
local ip = $L2TP_LOCAL
require chap = yes
refuse pap = yes
require authentication = yes
name = l2tpd
pppoptfile = /etc/ppp/options.xl2tpd
length bit = yes
EOF

# Set xl2tpd options
Conf_backup "/etc/ppp/options.xl2tpd"
cat > /etc/ppp/options.xl2tpd <<EOF
+mschap-v2
ipcp-accept-local
ipcp-accept-remote
ms-dns $DNS_SRV1
ms-dns $DNS_SRV2
noccp
auth
mtu 1280
mru 1280
proxyarp
lcp-echo-failure 4
lcp-echo-interval 30
connect-delay 5000
EOF

## Create VPN credentials
#Conf_backup "/etc/ppp/chap-secrets"
#cat > /etc/ppp/chap-secrets <<EOF
##Configure by $CUR_DATATIME 
#
#doubleQ 	l2tpd 	doubleQ 	*
#EOF


Conf_backup "/etc/sysctl.d/ipsec.conf"
cat > /etc/sysctl.d/ipsec.conf << EOF
#
net.ipv4.ip_forward = 1
net.ipv4.conf.all.rp_filter = 0
net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.$eth.rp_filter = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
EOF
#
sysctl -p
#
modprobe -q pppol2tp
#
systemctl restart ipsec.service
systemctl enable ipsec.service
#
ipsec verify
#
systemctl start xl2tpd.service
systemctl enable xl2tpd.service
#
#firewall-cmd --reload
#firewall-cmd --permanent --add-service=pptpd
#firewall-cmd --permanent --add-service=l2tpd
#firewall-cmd --permanent --add-service=ipsec
#firewall-cmd --permanent --add-masquerade
#firewall-cmd --permanent --direct --add-rule ipv4 filter FORWARD 0 -p tcp -i ppp+ -j TCPMSS --syn --set-mss 1356
#firewall-cmd --reload



