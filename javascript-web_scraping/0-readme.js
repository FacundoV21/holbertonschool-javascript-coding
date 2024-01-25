#!/usr/bin/node
const file = require('file');

file.readFile(process.argv[2], 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
