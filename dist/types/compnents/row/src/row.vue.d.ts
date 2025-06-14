import { CSSProperties } from "vue";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    justify: {
        type: StringConstructor;
        validator: (val: typeof import("./types").RowJustify[number]) => boolean;
        default: string;
    };
    align: {
        type: StringConstructor;
        validator: (val: typeof import("./types").RowAlign[number]) => boolean;
        default: string;
    };
}>, {
    style: import("vue").ComputedRef<CSSProperties>;
    rowKls: import("vue").ComputedRef<string[]>;
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            require: boolean;
            default: string;
        };
        gutter: {
            type: NumberConstructor;
            default: number;
        };
        justify: {
            type: StringConstructor;
            validator: (val: typeof import("./types").RowJustify[number]) => boolean;
            default: string;
        };
        align: {
            type: StringConstructor;
            validator: (val: typeof import("./types").RowAlign[number]) => boolean;
            default: string;
        };
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    justify: {
        type: StringConstructor;
        validator: (val: typeof import("./types").RowJustify[number]) => boolean;
        default: string;
    };
    align: {
        type: StringConstructor;
        validator: (val: typeof import("./types").RowAlign[number]) => boolean;
        default: string;
    };
}>> & Readonly<{}>, {
    justify: string;
    tag: string;
    gutter: number;
    align: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
