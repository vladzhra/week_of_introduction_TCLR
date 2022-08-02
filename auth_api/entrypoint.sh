#!/bin/bash

set -e

echo "running npm install"
npm install

echo "running nodemon"
nodemon app.js
