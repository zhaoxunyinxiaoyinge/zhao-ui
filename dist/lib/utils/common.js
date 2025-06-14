"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.isNumber = exports.isAarray = void 0;
const isAarray = (arr) => {
    return Array.isArray(arr);
};
exports.isAarray = isAarray;
const isNumber = (val) => {
    return typeof val === "number";
};
exports.isNumber = isNumber;
const isObject = (val) => {
    return typeof val === 'object';
};
exports.isObject = isObject;
