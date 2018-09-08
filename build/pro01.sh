#!/bin/bash

# update and unzip
apt-get -y update && apt-get install -y unzip

# install consul 
cd /vagrant
version='0.8.0'
wget https://releases.hashicorp.com/consul/${version}/consul_${version}_linux_amd64.zip -O consul.zip
unzip consul.zip
rm consul.zip
mkdir /etc/systemd/system/consul.d/

# make consul executable
chmod +x consul