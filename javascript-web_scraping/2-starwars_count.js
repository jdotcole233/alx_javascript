#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
const characterID = 18;

const chunks = [];

request.get(url, { encoding: 'utf-8' })
  .on('data', function (data) {
    chunks.push(data);
  })
  .on('end', function () {
    const data = JSON.parse(chunks);
    const resp = data.results
      .map(film => film.characters)
      .flat()
      .filter(char => char.includes(characterID));
    console.log(resp.length);
  });
