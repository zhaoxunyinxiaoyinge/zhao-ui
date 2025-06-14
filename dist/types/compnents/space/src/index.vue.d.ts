import { StyleValue } from "vue";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    alignment: {
        type: import("vue").PropType<keyof import("./types").alignment>;
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
        type: import("vue").PropType<import("./types").alignment>;
        default: string;
        required: boolean;
    };
    size: {
        type: import("vue").PropType<Array<number>>;
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
}>, {
    className: import("vue").ComputedRef<string[]>;
    containerStyle: import("vue").ComputedRef<StyleValue>;
    itemStyle: import("vue").ComputedRef<StyleValue>;
    classes: import("vue").ComputedRef<string>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    alignment: {
        type: import("vue").PropType<keyof import("./types").alignment>;
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
        type: import("vue").PropType<import("./types").alignment>;
        default: string;
        required: boolean;
    };
    size: {
        type: import("vue").PropType<Array<number>>;
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
}>> & Readonly<{}>, {
    size: number[];
    fill: boolean;
    style: import("./types").alignment;
    class: string;
    alignment: "alignments";
    direction: string;
    wrap: boolean;
    fillRatio: number;
    prefixCls: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
