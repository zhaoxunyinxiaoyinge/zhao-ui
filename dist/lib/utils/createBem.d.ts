/**
 *
 * @param name
 * @returns 创建命名空间
 */
declare function createNamespace(block: string): {
    b: (blockSuffix?: string) => string;
    e: (element: string) => string;
    m: (modifier?: string) => string;
    em: (element?: string, modifier?: string) => string;
    be: (blockSuffix?: string, element?: string) => string;
    bm: (blockSuffix?: string, modifier?: string) => string;
    bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
    is: (name: string, state: boolean) => string;
    cssVar: (object: Record<string, string>) => Record<string, string>;
    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
    cssVarName: (name: string) => string;
    cssVarBlockName: (name: string) => string;
};
export { createNamespace };
