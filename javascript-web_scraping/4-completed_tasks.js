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
      .map((todo) => {
         if (!response.hasOwnProperty(todo.userId)) {
            response[todo.userId] = 0;
         }

         let counter = response[todo.userId];
         if (todo.completed) {
           counter = counter + 1;
         }
         response[todo.userId] = counter
      });
    console.log(response);
  });
