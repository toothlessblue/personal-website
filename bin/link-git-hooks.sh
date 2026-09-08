#!/bin/bash

for filepath in git-hooks/*; do
    filename="$(basename $filepath .sh)";
    ln -s "../../git-hooks/$filename.sh" ".git/hooks/$filename";
done
