import type { ExtractPropTypes, PropType } from "vue";
interface AutoSize {
    minRows?: number;
    maxRows?: number;
}
export declare const inputProps: {
    minlength: {
        type: PropType<number | string>;
    };
    maxlength: {
        type: PropType<number | string>;
    };
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
        type: PropType<number | string>;
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
    name: {
        type: StringConstructor;
        default: string;
    };
    "input-style": {
        type: PropType<{
            [propName: string]: any;
        } | string>;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    autosize: {
        type: PropType<AutoSize | boolean>;
        default: boolean;
    };
};
export type inputTypes = ExtractPropTypes<typeof inputProps>;
export {};
