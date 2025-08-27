declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    maxValue: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: NumberConstructor;
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    mytempscore: import("vue").Ref<number, number>;
    myscore: import("vue").Ref<number, number>;
    handleMouseEnter: (item: any) => null;
    handlechecked: (item: any) => void;
    restoreScore: () => null;
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        maxValue: {
            type: NumberConstructor;
            default: number;
        };
        value: {
            type: NumberConstructor;
            default: number;
        };
        activeColor: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChecked?: (...args: any[]) => any;
    }> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "checked"[], "checked", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    maxValue: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: NumberConstructor;
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChecked?: (...args: any[]) => any;
}>, {
    disabled: boolean;
    value: number;
    maxValue: number;
    activeColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
