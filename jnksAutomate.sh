#!/bin/bash
sudo su
cd ../../
cd /opt/
echo ---------installing apt update-------------------------------
apt-get update
echo----------installing java----------------------------
add-apt-repository ppa:openjdk-r/ppa
apt-get update
apt-get install -y fontconfig openjdk-17-jre openjdk-17-jdk
echo----------installing jenkins----------------------------
wget -O /usr/share/keyrings/jenkins-keyring.asc https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
apt-get update
apt-get install jenkins
echo----------install npm packages-----------------------
apt install npm
echo----------install docker--------------------------
wget https://raw.githubusercontent.com/lerndevops/labs/master/scripts/installDocker.sh -P /tmp
chmod 755 /tmp/installDocker.sh
bash /tmp/installDocker.sh
echo---------super su priveleges to jenkins-------------
curl -o highToJenkns.sh https://raw.githubusercontent.com/Iyappan97/react-app-test/master/highToJenkns.sh
chmod +x highToJenkns.sh
./highToJenkns.sh
echo--------------done---done------done-----------------------


#---------------------------------------------
#git clone https://github.com/Iyappan97/react-app-test.git
#cd react-app-test/
#docker build -t myreactapp:latest .
#docker login -u iyappansam97 -p Docker#IPU97
#docker tag myreactapp:latest iyappansam97/myreactapp:latest
#docker push iyappansam97/myreactapp:latest
