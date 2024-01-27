#!/usr/bin/node

const request = require('request');

request.get(process.argv[2], (err, response, body) => {
  if (err) throw err;
  const elems = JSON.parse(body);
  const complete = {};
  for (const i of elems) {
    if (i.completed) {
      if (!complete[i.userId]) {
        complete[i.userId] = 1;
      } else {
        complete[i.userId] += 1;
      }
    }
  }
  console.log(complete);
});
