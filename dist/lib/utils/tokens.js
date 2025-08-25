"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalconfig = exports.configKey = exports.rowContextKey = void 0;
;
// 全局配置，传入key类型
var Lang;
(function (Lang) {
    Lang["zh"] = "zh-cn";
    Lang["en"] = "en";
})(Lang || (Lang = {}));
const rowContextKey = Symbol("rowContextKey");
exports.rowContextKey = rowContextKey;
const configKey = Symbol("");
exports.configKey = configKey;
const globalconfig = Symbol("");
exports.globalconfig = globalconfig;
