#!/bin/bash

for filepath in git-hooks/*; do
    filename="$(basename $filepath .sh)";
    cp "git-hooks/$filename.sh" ".git/hooks/$filename";
done
