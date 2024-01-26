#!/usr/bin/node

const request = require('request');

request.get(process.argv[2], (err, response, body) => {
  if (err) throw err;
  const elems = JSON.parse(body);
  let count = 0;

  for (const i of elems.results) {
    for (const j of i.characters) {
      if (j.includes('18')) {
        count += 1;
      }
    }
  }
  console.log(count);
});
