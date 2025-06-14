declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("./types").ButtonType>;
        readonly default: "default";
        readonly validator: (val: string) => boolean;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./types").ButtonSize>;
        readonly default: "default";
        readonly validator: (val: string) => boolean;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: BooleanConstructor;
    readonly loading: BooleanConstructor;
}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("./types").ButtonType>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("./types").ButtonSize>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly icon: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly disabled: BooleanConstructor;
        readonly loading: BooleanConstructor;
    }>> & Readonly<{}> & {}>;
    isplain: import("vue").Ref<boolean, boolean>;
    isCirle: import("vue").Ref<boolean, boolean>;
    isRound: import("vue").Ref<boolean, boolean>;
    isLoading: import("vue").Ref<boolean, boolean>;
    ref: import("vue").Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
    size: import("vue").Ref<string | undefined, string | undefined>;
    type: import("vue").Ref<string | undefined, string | undefined>;
    disabled: import("vue").ComputedRef<boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("./types").ButtonType>;
        readonly default: "default";
        readonly validator: (val: string) => boolean;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./types").ButtonSize>;
        readonly default: "default";
        readonly validator: (val: string) => boolean;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: BooleanConstructor;
    readonly loading: BooleanConstructor;
}>> & Readonly<{}>, {
    readonly type: import("./types").ButtonType;
    readonly size: import("./types").ButtonSize;
    readonly icon: string;
    readonly disabled: boolean;
    readonly loading: boolean;
}, {}, {
    icon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            require: boolean;
            default: string;
            value: string;
        };
    }>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            icon: {
                type: StringConstructor;
                require: boolean;
                default: string;
                value: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            require: boolean;
            default: string;
            value: string;
        };
    }>> & Readonly<{}>, {
        icon: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Loading: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
