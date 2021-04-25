"use strict";

exports.__esModule = true;

var fs_1 = require("fs");

var matches = fs_1["default"].readFileSync('football.csv', {
  encoding: 'utf-8'
}).split('\n').map(function (row) {
  return row.split(',');
});
console.log(matches);