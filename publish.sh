#!/usr/bin/env bash
# DEFAULT="circle_ci"
# PROFILE=${AWS_PROFILE:-$DEFAULT}
BUCKET=hross.io
DIR=dist/
aws  s3  sync $DIR s3://$BUCKET --delete --region ap-southeast-2
