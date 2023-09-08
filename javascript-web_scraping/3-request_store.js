#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, { encoding: 'utf-8' })
  .pipe(fs.createWriteStream(filePath));
