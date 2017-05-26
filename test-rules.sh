#!/bin/bash
set -v

find test -type f -name '*.lint' -exec dirname {} \; | sort -u | xargs -n 1 ./node_modules/.bin/tslint --test
