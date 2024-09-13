declare const _default: import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        validator: (_val: "large" | "default" | "small") => boolean;
        default: string;
    };
    type: {
        type: StringConstructor;
        validator: (_val: "primary" | "danger" | "warning" | "info" | "success") => boolean;
        default: string;
    };
    truncated: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            validator: (_val: "large" | "default" | "small") => boolean;
            default: string;
        };
        type: {
            type: StringConstructor;
            validator: (_val: "primary" | "danger" | "warning" | "info" | "success") => boolean;
            default: string;
        };
        truncated: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & {}>>;
    classNames: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        validator: (_val: "large" | "default" | "small") => boolean;
        default: string;
    };
    type: {
        type: StringConstructor;
        validator: (_val: "primary" | "danger" | "warning" | "info" | "success") => boolean;
        default: string;
    };
    truncated: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    tag: string;
    size: string;
    type: string;
    truncated: boolean;
}>;
export default _default;
