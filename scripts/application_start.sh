#!/bin/bash
cd /home/ubuntu/deploy/infiniti
cp -r build/* /var/www/html/infiniti
systemctl restart apache2
