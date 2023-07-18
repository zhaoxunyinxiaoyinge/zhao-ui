
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
function _bem(prixname: string, bolck: string, element: string, modifier: string) {
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
function createBEM(preixNname: string) {
    /**
     * 
     * @param bolck 
     * @returns 
     */
    const b = (bolck: string = "") => _bem(preixNname, bolck, "", "");
    /**
     * 
     * @param element 
     * @returns 
     */
    const e = (element: string) => element ? _bem(preixNname, "", element, "") : "";
    /**
     * 
     * @param modifier 
     * @returns 
     */
    const m = (modifier: string = "") => modifier ? _bem(preixNname, "", "", modifier) : "";
    /**
     * 
     * @param element 
     * @param modifier 
     * @returns 
     */
    const em = (element: string = "", modifier: string = "") => element && modifier ? _bem(preixNname, "", element, modifier) : "";
    /**
     * 
     * @param bolck 
     * @param element 
     * @returns 
     */
    const be = (bolck: string = "", element: string = "") => bolck && element ? _bem(preixNname, bolck, element, "") : "";
    /**
     * 
     * @param bolck 
     * @param modifier 
     * @returns 
     */
    const bm = (bolck: string = "", modifier: string = "") => bolck && modifier ? _bem(preixNname, bolck, "", modifier) : "";
    /**
     * 
     * @param bolck 
     * @param element 
     * @param modifier 
     * @returns 
     */
    const bem = (bolck: string = "", element: string = "", modifier: string = "") => bolck && element && modifier ? _bem(preixNname, bolck, element, modifier) : "";
    /**
     * 
     * @param name 
     * @param state 
     * @returns 
     */
    const is = (name: string, state: boolean) => state ? `is-${name}` : "";

    return {
        b,
        e,
        m,
        em,
        be,
        bm,
        bem,
        is
    }
}

/**
 * 
 * @param name 
 * @returns 创建命名空间
 */
function createNamespace(name: string) {
    let prixname = `el-${name}`;
    return createBEM(prixname);
}

export {
   createNamespace
} 