import { Ref } from "vue";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly tag: {
        readonly type: import("vue").PropType<"button" | "a" | "div">;
        readonly default: "button";
    };
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
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly tag: {
            readonly type: import("vue").PropType<"button" | "a" | "div">;
            readonly default: "button";
        };
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
        readonly disabled: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
    }>> & Readonly<{}> & {}>;
    isplain: Ref<boolean, boolean>;
    isCirle: Ref<boolean, boolean>;
    isRound: Ref<boolean, boolean>;
    isLoading: Ref<boolean, boolean>;
    ref: Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
    size: Ref<string | undefined, string | undefined>;
    type: Ref<string | undefined, string | undefined>;
    disabled: import("vue").ComputedRef<boolean>;
    onClick: (event: MouseEvent) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly tag: {
        readonly type: import("vue").PropType<"button" | "a" | "div">;
        readonly default: "button";
    };
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
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
}>> & Readonly<{}>, {
    readonly tag: "button" | "a" | "div";
    readonly type: import("./types").ButtonType;
    readonly size: import("./types").ButtonSize;
    readonly icon: string;
    readonly disabled: boolean;
}, {}, {
    icon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        icon: {
            type: import("vue").PropType<string>;
            require: boolean;
            default: string;
            value: string;
        };
    }>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            icon: {
                type: import("vue").PropType<string>;
                require: boolean;
                default: string;
                value: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: import("vue").PropType<string>;
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
