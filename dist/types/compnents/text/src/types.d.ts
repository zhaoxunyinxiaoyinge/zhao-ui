import type { ExtractPropTypes } from "vue";
export declare const sizes: readonly ["large", "default", "small"];
export declare const types: readonly ["primary", "danger", "warning", "info", "success"];
export declare const textProps: {
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        validator: (_val: (typeof sizes)[number]) => boolean;
        default: string;
    };
    type: {
        type: StringConstructor;
        validator: (_val: (typeof types)[number]) => boolean;
        default: string;
    };
    truncated: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type textType = ExtractPropTypes<typeof textProps>;
