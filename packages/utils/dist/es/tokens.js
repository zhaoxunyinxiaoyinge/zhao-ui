;
// 全局配置，传入key类型
var Lang;
(function (Lang) {
    Lang["zh"] = "zh-cn";
    Lang["en"] = "en";
})(Lang || (Lang = {}));
const rowContextKey = Symbol("rowContextKey");
const configKey = Symbol("");
const globalconfig = Symbol("");
const checkboxgroupConfig = Symbol("");
export { rowContextKey, configKey, globalconfig, checkboxgroupConfig };
