declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    height: {
        type: import("vue").PropType<number | string>;
        default: string;
    };
    maxHeight: {
        type: NumberConstructor;
        String: StringConstructor;
    };
    native: {
        type: BooleanConstructor;
    };
    "wrap-style": {
        type: StringConstructor;
        Object: ObjectConstructor;
    };
    "wrap-class": {
        type: StringConstructor;
    };
    "view-style": {
        type: StringConstructor;
    };
    'view-class': {
        type: StringConstructor;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    always: {
        type: BooleanConstructor;
    };
    "min-size": {
        type: NumberConstructor;
    };
}>, {
    scrollBarHorizontalShow: import("vue").Ref<boolean, boolean>;
    scrollBarVerticalShow: import("vue").Ref<boolean, boolean>;
    scrollBarVerticalHeight: import("vue").Ref<number, number>;
    scrollBarHorizontalWidth: import("vue").Ref<number, number>;
    scrollBarTop: import("vue").Ref<number, number>;
    scrollBarLeft: import("vue").Ref<number, number>;
    isShowScrollBar: import("vue").Ref<boolean, boolean>;
    scrollClass: string;
    scrollWrapClass: string;
    scrollViewClass: string;
    scrollBarClass: string;
    horizontalBarClass: string;
    verticalBarClass: string;
    wrapStyle: import("vue").ComputedRef<{
        height: string;
    }>;
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: import("vue").PropType<number | string>;
            default: string;
        };
        maxHeight: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        native: {
            type: BooleanConstructor;
        };
        "wrap-style": {
            type: StringConstructor;
            Object: ObjectConstructor;
        };
        "wrap-class": {
            type: StringConstructor;
        };
        "view-style": {
            type: StringConstructor;
        };
        'view-class': {
            type: StringConstructor;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        always: {
            type: BooleanConstructor;
        };
        "min-size": {
            type: NumberConstructor;
        };
    }>> & Readonly<{}> & {}>;
    wrap: import("vue").Ref<any, any>;
    scroll: import("vue").Ref<any, any>;
    scrollThumTop: import("vue").Ref<any, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: import("vue").PropType<number | string>;
        default: string;
    };
    maxHeight: {
        type: NumberConstructor;
        String: StringConstructor;
    };
    native: {
        type: BooleanConstructor;
    };
    "wrap-style": {
        type: StringConstructor;
        Object: ObjectConstructor;
    };
    "wrap-class": {
        type: StringConstructor;
    };
    "view-style": {
        type: StringConstructor;
    };
    'view-class': {
        type: StringConstructor;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    always: {
        type: BooleanConstructor;
    };
    "min-size": {
        type: NumberConstructor;
    };
}>> & Readonly<{}>, {
    tag: string;
    always: boolean;
    height: string | number;
    native: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
