declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    header: {
        type: StringConstructor;
    };
    footer: {
        type: StringConstructor;
    };
    "body-style": {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    "header-class": {
        type: StringConstructor;
    };
    "body-class": {
        type: StringConstructor;
    };
    "footer-class": {
        type: StringConstructor;
    };
    shadow: {
        type: import("vue").PropType<import("./types").Shadow>;
        default: string;
    };
}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        header: {
            type: StringConstructor;
        };
        footer: {
            type: StringConstructor;
        };
        "body-style": {
            type: import("vue").PropType<import("vue").StyleValue>;
        };
        "header-class": {
            type: StringConstructor;
        };
        "body-class": {
            type: StringConstructor;
        };
        "footer-class": {
            type: StringConstructor;
        };
        shadow: {
            type: import("vue").PropType<import("./types").Shadow>;
            default: string;
        };
    }>> & Readonly<{}> & {}>;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    classes: string[];
    headerClass: any[];
    bodyClass: any[];
    footerClass: any[];
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    header: {
        type: StringConstructor;
    };
    footer: {
        type: StringConstructor;
    };
    "body-style": {
        type: import("vue").PropType<import("vue").StyleValue>;
    };
    "header-class": {
        type: StringConstructor;
    };
    "body-class": {
        type: StringConstructor;
    };
    "footer-class": {
        type: StringConstructor;
    };
    shadow: {
        type: import("vue").PropType<import("./types").Shadow>;
        default: string;
    };
}>> & Readonly<{}>, {
    shadow: import("./types").Shadow;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
