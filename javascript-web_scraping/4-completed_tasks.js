#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

const chunks = [];

request.get(url)
  .on('data', data => {
    chunks.push(data);
  })
  .on('end', () => {
    const bufferData = Buffer.concat(chunks);
    const response = {};
    JSON.parse(bufferData)
      .forEach(todo => {
        if (!response.hasOwnProperty.call(todo.userId)) {
          response[todo.userId] = 0;
        }

        if (todo.completed) {
          response[todo.userId]++;
        }
      });
    console.log(response);
  });
