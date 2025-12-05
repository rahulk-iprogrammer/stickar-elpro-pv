#!/bin/bash
cd /home/ubuntu/deploy/infiniti
npm install
if [ "$DEPLOYMENT_GROUP_NAME" == "sticker" ]
then
    npm run build_stage
fi
if [ "$DEPLOYMENT_GROUP_NAME" == "sticker-infiniti" ]
then
    npm run build_prod
fi
