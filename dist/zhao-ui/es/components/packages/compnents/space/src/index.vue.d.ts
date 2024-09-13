import { StyleValue } from "vue";
declare const _default: import("vue").DefineComponent<{
    alignment: {
        type: import("vue").PropType<"alignments">;
        default: string;
        required: boolean;
    };
    class: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
    direction: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
    style: {
        type: import("vue").PropType<import("./index").alignment>;
        default: string;
        required: boolean;
    };
    size: {
        type: import("vue").PropType<number[]>;
        default: string;
        required: boolean;
    };
    wrap: {
        type: import("vue").PropType<boolean>;
        default: boolean;
        required: boolean;
    };
    fill: {
        type: import("vue").PropType<boolean>;
        default: boolean;
        required: boolean;
    };
    fillRatio: {
        type: import("vue").PropType<number>;
        default: number;
        required: boolean;
    };
    prefixCls: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
}, {
    className: import("vue").ComputedRef<string[]>;
    containerStyle: import("vue").ComputedRef<StyleValue>;
    itemStyle: import("vue").ComputedRef<StyleValue>;
    classes: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    alignment: {
        type: import("vue").PropType<"alignments">;
        default: string;
        required: boolean;
    };
    class: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
    direction: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
    style: {
        type: import("vue").PropType<import("./index").alignment>;
        default: string;
        required: boolean;
    };
    size: {
        type: import("vue").PropType<number[]>;
        default: string;
        required: boolean;
    };
    wrap: {
        type: import("vue").PropType<boolean>;
        default: boolean;
        required: boolean;
    };
    fill: {
        type: import("vue").PropType<boolean>;
        default: boolean;
        required: boolean;
    };
    fillRatio: {
        type: import("vue").PropType<number>;
        default: number;
        required: boolean;
    };
    prefixCls: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
}>>, {
    fill: boolean;
    alignment: "alignments";
    class: string;
    direction: string;
    style: import("./index").alignment;
    size: number[];
    wrap: boolean;
    fillRatio: number;
    prefixCls: string;
}>;
export default _default;
