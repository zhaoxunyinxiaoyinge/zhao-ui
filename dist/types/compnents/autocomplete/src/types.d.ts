import type { PropType, ExtractPropTypes } from 'vue';
export declare const getPassProps: {
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
        readonly type: PropType<Array<{
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
};
export type AutocompleteProps = ExtractPropTypes<typeof getPassProps>;
