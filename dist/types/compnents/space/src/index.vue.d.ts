import { CSSProperties } from "vue";
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
    separator: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
}>, {
    className: import("vue").ComputedRef<string[]>;
    validChildren: import("vue").ComputedRef<import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[]>;
    spaceItemClassModifier: import("vue").ComputedRef<string>;
    validchild: import("vue").Ref<any, any>;
    containerStyle: import("vue").ComputedRef<CSSProperties>;
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
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
        separator: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
    }>> & Readonly<{}> & {}>;
    fillChecked: import("vue").ComputedRef<boolean>;
    getFillVal: import("vue").ComputedRef<string>;
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
    separator: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
}>> & Readonly<{}>, {
    size: number[];
    fill: boolean;
    style: import("./types").alignment;
    class: string;
    wrap: boolean;
    alignment: "alignments";
    direction: string;
    fillRatio: number;
    prefixCls: string;
    separator: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
