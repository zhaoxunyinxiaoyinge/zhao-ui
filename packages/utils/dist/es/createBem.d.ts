/**
 * js 生成BEM 规范 (zhao__button--success);
 * author zhaoxunyin
 */
/**
 *
 * @param name
 * @returns 创建命名空间
 */
declare function createNamespace(name: string): {
    b: (bolck?: string) => string;
    e: (element: string) => string;
    m: (modifier?: string) => string;
    em: (element?: string, modifier?: string) => string;
    be: (bolck?: string, element?: string) => string;
    bm: (bolck?: string, modifier?: string) => string;
    bem: (bolck?: string, element?: string, modifier?: string) => string;
    is: (name: string, state: boolean) => string;
};
export { createNamespace };
