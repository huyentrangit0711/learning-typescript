"use strict";
exports.__esModule = true;
exports.CsvFileReader = void 0;
var fs_1 = require("fs");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1["default"].readFileSync(this.fileName, {
            encoding: 'utf-8'
        }).split('\n').map(function (row) { return row.split(','); });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
