#!/bin/bash
#!/usr/bin/env node

chmod +x "$0"

npm_version=`npm -v`

if [[ "${npm_version}" =~ [0-9] ]]; then
    echo "${npm_version}"
    npm init --y
    npm install tailwindcss @tailwindcss/cli
    mkdir src
    echo "@import \"tailwindcss\";" > src/input.css;
    node package_edit_script.js;
    if [[ -e ".gitignore" ]]; then
            echo "\n" >> .gitignore
            echo "node_modules/**" >> .gitignore
            echo "package_edit_script.js" >> .gitignore
            echo "tailwind_script.sh" >> .gitignore
    else
        echo "error"
    fi
else
    exit 'npm not installed'
fi