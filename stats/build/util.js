"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStrToDate = void 0;
var dateStrToDate = function (dateString) {
    var dateSplit = dateString.split('/');
    // 10/08/2018
    return new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0]);
};
exports.dateStrToDate = dateStrToDate;
