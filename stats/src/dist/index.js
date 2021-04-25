"use strict";
exports.__esModule = true;
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
// enum - enumaration
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "H";
})(MatchResult || (MatchResult = {}));
var manchesWin = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manchesWin++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manchesWin++;
    }
}
console.log("Man United winned " + manchesWin + " times");
