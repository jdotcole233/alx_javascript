#!/usr/bin/node

const request = require('request');
const movieID = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
  }

  const data = JSON.parse(body);
  data.characters.forEach((character) => {
    request.get(character, { encoding: 'utf-8' }).on('data', (data) => {
      console.log(JSON.parse(data).name);
    });
  });
});
