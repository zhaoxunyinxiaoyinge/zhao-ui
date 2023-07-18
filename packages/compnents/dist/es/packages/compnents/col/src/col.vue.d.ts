import { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    span: {
        type: NumberConstructor;
        require: boolean;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    push: {
        type: NumberConstructor;
        default: number;
    };
    pull: {
        type: StringConstructor;
        validator: (val: "top" | "middle" | "bottom") => boolean;
        default: string;
    };
    xs: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    sm: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    md: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    lg: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    xl: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            require: boolean;
            default: number;
        };
        offset: {
            type: NumberConstructor;
            default: number;
        };
        push: {
            type: NumberConstructor;
            default: number;
        };
        pull: {
            type: StringConstructor;
            validator: (val: "top" | "middle" | "bottom") => boolean;
            default: string;
        };
        xs: {
            type: (NumberConstructor | ObjectConstructor)[];
            default: string;
        };
        sm: {
            type: (NumberConstructor | ObjectConstructor)[];
            default: string;
        };
        md: {
            type: (NumberConstructor | ObjectConstructor)[];
            default: string;
        };
        lg: {
            type: (NumberConstructor | ObjectConstructor)[];
            default: string;
        };
        xl: {
            type: (NumberConstructor | ObjectConstructor)[];
            default: string;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>> & {}>>;
    style: import("vue").ComputedRef<CSSProperties>;
    colKls: import("vue").ComputedRef<(string | string[])[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    span: {
        type: NumberConstructor;
        require: boolean;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    push: {
        type: NumberConstructor;
        default: number;
    };
    pull: {
        type: StringConstructor;
        validator: (val: "top" | "middle" | "bottom") => boolean;
        default: string;
    };
    xs: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    sm: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    md: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    lg: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    xl: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    push: number;
    span: number;
    offset: number;
    pull: string;
    xs: number | Record<string, any>;
    sm: number | Record<string, any>;
    md: number | Record<string, any>;
    lg: number | Record<string, any>;
    xl: number | Record<string, any>;
    tag: string;
}>;
export default _default;
