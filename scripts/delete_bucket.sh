#!/usr/bin/env bash

cd $(dirname $0)/..
set -x

source config

aws s3 rb s3://$AWS_BUCKET_NAME --force --region $AWS_REGION --profile $AWS_PROFILE
