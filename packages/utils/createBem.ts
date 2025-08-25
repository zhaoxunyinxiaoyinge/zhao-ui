
/**
 * js 生成BEM 规范 (zhao__button--success);
 * author zhaoxunyin
 */

import { Style } from "util";

/**
 * 
 * @param namespace 
 * @param bolck 
 * @param blockSuffix
 * @param element 
 * @param modifier 
 * @returns 
 */
const namespace:string='el';
// 完整的类型生成比如：el-button-group__icon--large

function _bem(namespace: string, bolck: string,blockSuffix:string, element: string, modifier: string) {
    let cls=`${namespace}-${bolck}`;
     if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

/**
 * 
 * @param block 
 * @returns 
 */
function createBEM(block: string) {
    /**
     * 
     * @param bolck 
     * @returns 
     */
    const b = (blockSuffix: string = "") => _bem(namespace,block,blockSuffix,"","");
    /**
     * 
     * @param element 
     * @returns 
     */
    const e = (element: string) => element ? _bem(namespace, block,"", element, "") : "";
    /**
     * 
     * @param modifier 
     * @returns 
     */
    const m = (modifier: string = "") => modifier ? _bem(namespace, block,"", "", modifier) : "";
    /**
     * 
     * @param element 
     * @param modifier 
     * @returns 
     */
    const em = (element: string = "", modifier: string = "") => element && modifier ? _bem(namespace, block,"", element, modifier) : "";
    /**
     * 
     * @param blockSuffix 
     * @param element 
     * @returns 
     */
    const be = (blockSuffix: string = "", element: string = "") => blockSuffix && element ? _bem(namespace,block,blockSuffix,element,"") : "";
    /**
     * 
     * @param blockSuffix 
     * @param modifier 
     * @returns 
     */
    const bm = (blockSuffix: string = "", modifier: string = "") => blockSuffix && modifier ? _bem(namespace,block, blockSuffix, "", modifier) : "";
    /**
     * 
     * @param bolck 
     * @param element 
     * @param modifier 
     * @returns 
     */
    const bem = (blockSuffix: string = "", element: string = "", modifier: string = "") => block && element && modifier ? _bem(namespace, block,blockSuffix,element, modifier) : "";
    /**
     * @param name 
     * @param state 
     * @returns 
     */
    const is = (name: string, state: boolean) => state&&name ? `is-${name}` : "";


    const cssVar = (object: Record<string, string>) => {
        const styles: Record<string, string> = {}
        for (const key in object) {
          if (object[key]) {
            styles[`--${namespace}-${key}`] = object[key]
          }
        }
        return styles
      }
      // with block
      const cssVarBlock = (object:{[key:string]:any}) => {
        const styles:Record<string, string> = {}
        for (const key in object) {
          if (object[key]) {
            styles[`--${namespace}-${block}-${key}`] = object[key]
          }
        }
        return styles
      }
    
      const cssVarName = (name: string) => `--${namespace}-${name}`
      const cssVarBlockName = (name: string) =>
        `--${namespace}-${block}-${name}`



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
    }
}

/**
 * 
 * @param name 
 * @returns 创建命名空间
 */
function createNamespace(block: string) {
    return createBEM(block);
}

export {
   createNamespace
} 