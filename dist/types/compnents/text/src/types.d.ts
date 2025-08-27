import type { ExtractPropTypes, PropType } from "vue";
export declare const sizes: readonly ["large", "default", "small"];
export declare const types: readonly ["primary", "danger", "warning", "info", "success"];
export declare const textProps: {
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<"large" | "default" | "small">;
        default: string;
    };
    type: {
        type: PropType<"primary" | "default" | "warning" | "info" | "success">;
    };
    truncated: {
        type: BooleanConstructor;
        default: boolean;
    };
    "line-clamp": {
        type: (StringConstructor | NumberConstructor)[];
    };
};
export type textType = ExtractPropTypes<typeof textProps>;
