declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    readonly msg: {
        readonly type: StringConstructor;
        readonly default: "hello";
    };
    readonly value: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "请输入";
    };
    readonly options: {
        readonly type: import("vue").PropType<Array<{
            label: string;
            value: string;
        }>>;
        readonly default: () => never[];
    };
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly multiple: BooleanConstructor;
    readonly filterable: BooleanConstructor;
}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly msg: {
            readonly type: StringConstructor;
            readonly default: "hello";
        };
        readonly value: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly placeholder: {
            readonly type: StringConstructor;
            readonly default: "请输入";
        };
        readonly options: {
            readonly type: import("vue").PropType<Array<{
                label: string;
                value: string;
            }>>;
            readonly default: () => never[];
        };
        readonly disabled: BooleanConstructor;
        readonly clearable: BooleanConstructor;
        readonly loading: BooleanConstructor;
        readonly multiple: BooleanConstructor;
        readonly filterable: BooleanConstructor;
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly msg: {
        readonly type: StringConstructor;
        readonly default: "hello";
    };
    readonly value: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "请输入";
    };
    readonly options: {
        readonly type: import("vue").PropType<Array<{
            label: string;
            value: string;
        }>>;
        readonly default: () => never[];
    };
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly multiple: BooleanConstructor;
    readonly filterable: BooleanConstructor;
}>> & Readonly<{}>, {
    readonly disabled: boolean;
    readonly value: string;
    readonly loading: boolean;
    readonly placeholder: string;
    readonly clearable: boolean;
    readonly msg: string;
    readonly options: {
        label: string;
        value: string;
    }[];
    readonly multiple: boolean;
    readonly filterable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
