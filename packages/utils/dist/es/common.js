const isAarray = (arr) => {
    return Array.isArray(arr);
};
const isNumber = (val) => {
    return typeof val === "number";
};
const isObject = (val) => {
    return typeof val === 'object';
};
export { isAarray, isNumber, isObject };
