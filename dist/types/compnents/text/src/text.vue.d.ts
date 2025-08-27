import { ComputedRef, StyleValue } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<"large" | "default" | "small">;
        default: string;
    };
    type: {
        type: import("vue").PropType<"primary" | "default" | "warning" | "info" | "success">;
    };
    truncated: {
        type: BooleanConstructor;
        default: boolean;
    };
    "line-clamp": {
        type: (StringConstructor | NumberConstructor)[];
    };
}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: import("vue").PropType<"large" | "default" | "small">;
            default: string;
        };
        type: {
            type: import("vue").PropType<"primary" | "default" | "warning" | "info" | "success">;
        };
        truncated: {
            type: BooleanConstructor;
            default: boolean;
        };
        "line-clamp": {
            type: (StringConstructor | NumberConstructor)[];
        };
    }>> & Readonly<{}> & {}>;
    classNames: ComputedRef<string[]>;
    style: ComputedRef<StyleValue>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: import("vue").PropType<"large" | "default" | "small">;
        default: string;
    };
    type: {
        type: import("vue").PropType<"primary" | "default" | "warning" | "info" | "success">;
    };
    truncated: {
        type: BooleanConstructor;
        default: boolean;
    };
    "line-clamp": {
        type: (StringConstructor | NumberConstructor)[];
    };
}>> & Readonly<{}>, {
    tag: string;
    size: "default" | "large" | "small";
    truncated: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
