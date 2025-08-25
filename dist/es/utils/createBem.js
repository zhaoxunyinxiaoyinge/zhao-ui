/**
 * js 生成BEM 规范 (zhao__button--success);
 * author zhaoxunyin
 */
/**
 *
 * @param namespace
 * @param bolck
 * @param blockSuffix
 * @param element
 * @param modifier
 * @returns
 */
const namespace = 'el';
// 完整的类型生成比如：el-button-group__icon--large
function _bem(namespace, bolck, blockSuffix, element, modifier) {
    let cls = `${namespace}-${bolck}`;
    if (blockSuffix) {
        cls += `-${blockSuffix}`;
    }
    if (element) {
        cls += `__${element}`;
    }
    if (modifier) {
        cls += `--${modifier}`;
    }
    return cls;
}
/**
 *
 * @param block
 * @returns
 */
function createBEM(block) {
    /**
     *
     * @param bolck
     * @returns
     */
    const b = (blockSuffix = "") => _bem(namespace, block, blockSuffix, "", "");
    /**
     *
     * @param element
     * @returns
     */
    const e = (element) => element ? _bem(namespace, block, "", element, "") : "";
    /**
     *
     * @param modifier
     * @returns
     */
    const m = (modifier = "") => modifier ? _bem(namespace, block, "", "", modifier) : "";
    /**
     *
     * @param element
     * @param modifier
     * @returns
     */
    const em = (element = "", modifier = "") => element && modifier ? _bem(namespace, block, "", element, modifier) : "";
    /**
     *
     * @param blockSuffix
     * @param element
     * @returns
     */
    const be = (blockSuffix = "", element = "") => blockSuffix && element ? _bem(namespace, block, blockSuffix, element, "") : "";
    /**
     *
     * @param blockSuffix
     * @param modifier
     * @returns
     */
    const bm = (blockSuffix = "", modifier = "") => blockSuffix && modifier ? _bem(namespace, block, blockSuffix, "", modifier) : "";
    /**
     *
     * @param bolck
     * @param element
     * @param modifier
     * @returns
     */
    const bem = (blockSuffix = "", element = "", modifier = "") => block && element && modifier ? _bem(namespace, block, blockSuffix, element, modifier) : "";
    /**
     * @param name
     * @param state
     * @returns
     */
    const is = (name, state) => state && name ? `is-${name}` : "";
    const cssVar = (object) => {
        const styles = {};
        for (const key in object) {
            if (object[key]) {
                styles[`--${namespace}-${key}`] = object[key];
            }
        }
        return styles;
    };
    // with block
    const cssVarBlock = (object) => {
        const styles = {};
        for (const key in object) {
            if (object[key]) {
                styles[`--${namespace}-${block}-${key}`] = object[key];
            }
        }
        return styles;
    };
    const cssVarName = (name) => `--${namespace}-${name}`;
    const cssVarBlockName = (name) => `--${namespace}-${block}-${name}`;
    return {
        b,
        e,
        m,
        em,
        be,
        bm,
        bem,
        is,
        cssVar,
        cssVarBlock,
        cssVarName,
        cssVarBlockName
    };
}
/**
 *
 * @param name
 * @returns 创建命名空间
 */
function createNamespace(block) {
    return createBEM(block);
}
export { createNamespace };
