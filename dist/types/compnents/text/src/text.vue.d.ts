declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        validator: (_val: typeof import("./types").sizes[number]) => boolean;
        default: string;
    };
    type: {
        type: StringConstructor;
        validator: (_val: typeof import("./types").types[number]) => boolean;
        default: string;
    };
    truncated: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            validator: (_val: typeof import("./types").sizes[number]) => boolean;
            default: string;
        };
        type: {
            type: StringConstructor;
            validator: (_val: typeof import("./types").types[number]) => boolean;
            default: string;
        };
        truncated: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}> & {}>;
    classNames: import("vue").ComputedRef<string[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        validator: (_val: typeof import("./types").sizes[number]) => boolean;
        default: string;
    };
    type: {
        type: StringConstructor;
        validator: (_val: typeof import("./types").types[number]) => boolean;
        default: string;
    };
    truncated: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    type: string;
    size: string;
    tag: string;
    truncated: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
