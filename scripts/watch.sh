#!/usr/bin/env bash

cd $(dirname $0)/..
set -x

source config

node_modules/.bin/webpack --watch -d
