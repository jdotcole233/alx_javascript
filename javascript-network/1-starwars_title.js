#!/usr/bin/node

const request = require('request');
const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

const chunks = [];

request.get(url).on('data', function (data) {
  chunks.push(data);
})
  .on('end', function () {
    const data = Buffer.concat(chunks);
    const content = JSON.parse(data);
    console.log(content?.title);
  })
  .on('error', err => {
    console.log(err);
  });
