import type { ExtractPropTypes, PropType } from "vue";
export declare const inputProps: {
    type: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassWord: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: PropType<string | number>;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    suffixIcon: {
        type: StringConstructor;
        default: string;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    "input-style": {
        type: PropType<string | {
            [propName: string]: any;
        }>;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
};
export type inputTypes = ExtractPropTypes<typeof inputProps>;
