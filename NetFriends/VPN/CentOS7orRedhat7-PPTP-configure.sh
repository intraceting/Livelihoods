#!/bin/bash
#    PPTP VPN for CentOS7 or Redhat7
#    
#    Copyright (C) 2015-2016 Danyl Zhang <1475811550@qq.com> and contributors
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

# Check root。
if [ $(id -u) != "0" ]
then
	echo -e "\033[31mError: You must be root to run this script.\033[0m"; 
	exit 1;
fi

#Upgrade Package
yum -y update

#Install Package
yum -y install epel-release
yum -y install firewalld net-tools curl ppp pptpd vim

#Check 'net.ipv4.ip_forward'
IPV4_FORWAD_EXISTS=`cat /etc/sysctl.conf | grep "net.ipv4.ip_forward = 1" | wc -l`
if [ $IPV4_FORWAD_EXISTS -le 0 ]
then
	#Enable IPv4 Forward
	echo 'net.ipv4.ip_forward = 1' >> /etc/sysctl.conf
	#Become effective 
	sysctl -p
fi

#Setup 'options.pptpd'
cat >/etc/ppp/options.pptpd <<END
# '/etc/ppp/chap-secrets' Will be used.
name pptpd
#
refuse-pap
refuse-chap
refuse-mschap
require-mschap-v2
require-mppe-128
#DNS,Modify as needed.
ms-dns 8.8.8.8
ms-dns 4.4.4.4
#
proxyarp
lock
nobsdcomp
novj
novjccomp
nologfd
END


#Setup 'pptpd.conf'
cat >/etc/pptpd.conf <<END
#Option location
option /etc/ppp/options.pptpd
#VPN Subnet,Modify as needed.
localip 192.168.2.1
remoteip 192.168.2.10-100
END


#Enable 'FIREWALLD'
systemctl restart firewalld.service
systemctl enable firewalld.service
#
firewall-cmd --set-default-zone=public
#Setup 'FIREWALLD' for Port '1723'
firewall-cmd --add-port=1723/tcp --permanent
firewall-cmd --add-masquerade --permanent

#Only the default route interface name.
#
#ROUTER_ETH_NAME=`route | grep default | awk '{print $NF}'`
#firewall-cmd --add-interface=$ROUTER_ETH_NAME
#firewall-cmd --permanent --direct --add-rule ipv4 filter INPUT 0 -i $ROUTER_ETH_NAME -p gre -j ACCEPT
#
#All interface name.
ifconfig -s | grep -v "Iface" | awk '{print $1}' | grep -v "lo" |  while read STRLINE
do
	firewall-cmd --add-interface=$STRLINE
	firewall-cmd --permanent --direct --add-rule ipv4 filter INPUT 0 -i $STRLINE -p gre -j ACCEPT
done
#
firewall-cmd --reload

#Setup 'ip-up.local'
cat > /etc/ppp/ip-up.local << END
/sbin/ifconfig ${ROUTER_ETH_NAME} mtu 1400
END
#Additional execution permission for 'ip-up.local'
chmod +x /etc/ppp/ip-up.local
#Start 'PPTP service'
systemctl restart pptpd.service
#Setup 'PPTP service' follow system startup.
systemctl enable pptpd.service

#
cat >> /etc/ppp/chap-secrets <<END
#
#Replace <vpn_user_name> and <vpn_user_passwd> with their own names and passwords. 
#
#zhangsan 	pptpd 	QQQ#%#%QQQ 		*
#
#
<vpn_user_name> 	pptpd 	<vpn_user_passwd> 		*
END

#Countdown prompt for Start 'VIM'.
for (( i = 3; i > 0; i-- ));do
	printf "Start VIM after %s seconds go to edit '/etc/ppp/chap-secrets'.\r" "$i"
	sleep $i
done
#
echo -e "\nStart VIM now."
#
vim /etc/ppp/chap-secrets



