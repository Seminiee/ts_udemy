#!/bin/bash

# bash FILENAME을 해도 $0의 값은 script name

if [ -z "$1" ] 
then
    targetDir='./'
else
    targetDir=$1
fi

#echo $targetDir

rm -rf "$targetDir/node_modules"
rm -rf "$targetDir/package-lock.json"