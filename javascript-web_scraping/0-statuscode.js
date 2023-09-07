#!/usr/bin/node

const request = require('request');

const url = process.argv[2];
request.get(url, { encoding: 'utf-8' }).on('response', function (response) {
  console.log(`code: ${response.statusCode}`);
}).on('error', err => console.log(err));
