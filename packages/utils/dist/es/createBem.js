/**
 * js 生成BEM 规范 (zhao__button--success);
 * author zhaoxunyin
 */
/**
 *
 * @param prixname
 * @param bolck
 * @param element
 * @param modifier
 * @returns
 */
function _bem(prixname, bolck, element, modifier) {
    if (bolck) {
        prixname += "-" + bolck;
    }
    if (element) {
        prixname += "__" + element;
    }
    if (modifier) {
        prixname += "__" + modifier;
    }
    return prixname;
}
/**
 *
 * @param preixNname
 * @returns
 */
function createBEM(preixNname) {
    /**
     *
     * @param bolck
     * @returns
     */
    const b = (bolck = "") => _bem(preixNname, bolck, "", "");
    /**
     *
     * @param element
     * @returns
     */
    const e = (element) => element ? _bem(preixNname, "", element, "") : "";
    /**
     *
     * @param modifier
     * @returns
     */
    const m = (modifier = "") => modifier ? _bem(preixNname, "", "", modifier) : "";
    /**
     *
     * @param element
     * @param modifier
     * @returns
     */
    const em = (element = "", modifier = "") => element && modifier ? _bem(preixNname, "", element, modifier) : "";
    /**
     *
     * @param bolck
     * @param element
     * @returns
     */
    const be = (bolck = "", element = "") => bolck && element ? _bem(preixNname, bolck, element, "") : "";
    /**
     *
     * @param bolck
     * @param modifier
     * @returns
     */
    const bm = (bolck = "", modifier = "") => bolck && modifier ? _bem(preixNname, bolck, "", modifier) : "";
    /**
     *
     * @param bolck
     * @param element
     * @param modifier
     * @returns
     */
    const bem = (bolck = "", element = "", modifier = "") => bolck && element && modifier ? _bem(preixNname, bolck, element, modifier) : "";
    /**
     *
     * @param name
     * @param state
     * @returns
     */
    const is = (name, state) => state ? `is-${name}` : "";
    return {
        b,
        e,
        m,
        em,
        be,
        bm,
        bem,
        is
    };
}
/**
 *
 * @param name
 * @returns 创建命名空间
 */
function createNamespace(name) {
    let prixname = `zhao-${name}`;
    return createBEM(prixname);
}
export { createNamespace };
