import type { ExtractPropTypes, PropType } from "vue";
export declare const inputNumberProps: {
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    "step-strictly": {
        type: BooleanConstructor;
        default: boolean;
    };
    precision: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: StringConstructor;
        default: PropType<"small" | "default" | "large">;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
    "controls-position": {
        type: StringConstructor;
        default: PropType<"" | "right">;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
};
export type inputNumberTypes = ExtractPropTypes<typeof inputNumberProps>;
