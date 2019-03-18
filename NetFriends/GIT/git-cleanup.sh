#!/bin/bash -x
#
PATH_NAME=$1
#
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch -rf ${PATH_NAME}' --prune-empty --tag-name-filter cat -- --all
#
#git push origin --force --all
