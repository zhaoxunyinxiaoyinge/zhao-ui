declare const size: readonly ["small", "medium", "large"];
type __VLS_Props = {
    data: Array<Record<string, any>>;
    height: string | number;
    "max-height": string | number;
    "border": string | number;
    "border-radius": string | number;
    "box-shadow": string | number;
    stripe: boolean;
    size: keyof typeof size;
    fit: boolean;
    "show-header": boolean;
    "highlight-current-row": boolean;
    "current-row-key": string | number;
    rowClassName: (row: Record<string, any>, rowIndex: number) => string | string[];
    "row-style": (row: Record<string, any>) => string | Record<string, any>;
    "cell-class-name": (row: Record<string, any>, column: Record<string, any>, cellValue: any) => string | string;
    "cell-style": (row: Record<string, any>, column: Record<string, any>, cellValue: any) => string | Record<string, any>;
    "header-row-class-name": (row: Record<string, any>) => string | string;
    "header-row-style": (row: Record<string, any>) => string | Record<string, any>;
    "header-cell-class-name": (column: Record<string, any>) => string | string;
    "header-cell-style": (column: Record<string, any>) => string | Record<string, any>;
    "row-key": string | number;
    "empty-text": string;
    "default-expand-all": boolean;
    "expand-row-keys": Array<string | number>;
    "default-sort": {
        key: string | number;
        order: 'asc' | 'desc';
    };
    "show-summary": boolean;
    "sum-text": string;
    "summary-method": (data: Array<Record<string, any>>) => Record<string, any>;
    "span-method": (row: Record<string, any>, column: Record<string, any>) => {
        rowspan: number;
        colspan: number;
    };
    "select-on-indeterminate": boolean;
    "indent": number;
    "lazy": boolean;
    "load": (row: Record<string, any>, treeNode: {
        expanded: boolean;
    }) => Promise<void>;
    "tree-props": {
        hasChildren: string;
        children: string;
    };
    "table-layout": string;
    "scrollbar-always-on": boolean;
    "show-overflow-tooltip": boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
