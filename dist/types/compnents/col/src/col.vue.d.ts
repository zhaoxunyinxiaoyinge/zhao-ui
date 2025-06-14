import { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        validator: (val: typeof import("./types").RowAlign[number]) => boolean;
        default: string;
    };
    xs: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    sm: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    md: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    lg: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    xl: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
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
            validator: (val: typeof import("./types").RowAlign[number]) => boolean;
            default: string;
        };
        xs: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        sm: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        md: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        lg: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        xl: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}> & {}>;
    style: import("vue").ComputedRef<CSSProperties>;
    colKls: import("vue").ComputedRef<(string | string[])[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
        validator: (val: typeof import("./types").RowAlign[number]) => boolean;
        default: string;
    };
    xs: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    sm: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    md: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    lg: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    xl: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    push: number;
    span: number;
    tag: string;
    offset: number;
    pull: string;
    xs: number | Record<string, any>;
    sm: number | Record<string, any>;
    md: number | Record<string, any>;
    lg: number | Record<string, any>;
    xl: number | Record<string, any>;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
