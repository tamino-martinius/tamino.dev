#!/usr/bin/env bash

cd $(dirname $0)/..
set -x

source config

aws s3 mb s3://$AWS_BUCKET_NAME --region $AWS_REGION --profile $AWS_PROFILE
