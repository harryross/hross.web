#!/usr/bin/env bash
# DEFAULT="circle_ci"
# PROFILE=${AWS_PROFILE:-$DEFAULT}
BUCKET=hross.io.s3-website-ap-southeast-2.amazonaws.com
DIR=dist/
aws  s3  sync $DIR s3://$BUCKET/
