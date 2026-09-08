#!/bin/bash

for filepath in git-hooks/*; do
    filename="${filepath##*/}";
    ln -s "../../git-hooks/$filename" ".git/hooks/$filename";
done
