declare const _default: import("vue").DefineComponent<{
    size: {
        type: import("vue").PropType<string>;
        require: boolean;
        default: string;
    };
    type: {
        type: StringConstructor;
        require: boolean;
    };
    icon: {
        type: StringConstructor;
        require: boolean;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        size: {
            type: import("vue").PropType<string>;
            require: boolean;
            default: string;
        };
        type: {
            type: StringConstructor;
            require: boolean;
        };
        icon: {
            type: StringConstructor;
            require: boolean;
        };
    }>> & {}>>;
    isplain: import("vue").Ref<boolean>;
    isCirle: import("vue").Ref<boolean>;
    isRound: import("vue").Ref<boolean>;
    isDisabled: import("vue").Ref<boolean>;
    isLoading: import("vue").Ref<boolean>;
    ref: import("vue").Ref<HTMLButtonElement | undefined>;
    size: import("vue").Ref<string | undefined>;
    type: import("vue").Ref<string | undefined>;
    disabeld: import("vue").Ref<{
        valueOf: () => boolean;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: import("vue").PropType<string>;
        require: boolean;
        default: string;
    };
    type: {
        type: StringConstructor;
        require: boolean;
    };
    icon: {
        type: StringConstructor;
        require: boolean;
    };
}>>, {
    size: string;
}>;
export default _default;
