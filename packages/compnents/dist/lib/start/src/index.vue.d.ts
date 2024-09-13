declare const _default: import("vue").DefineComponent<{
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
}, {
    mytempscore: import("vue").Ref<number>;
    myscore: import("vue").Ref<number>;
    handleMouseEnter: (item: any) => null;
    handlechecked: (item: any) => void;
    restoreScore: () => null;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "checked"[], "checked", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onChecked?: (...args: any[]) => any;
}, {
    value: number;
    maxValue: number;
    activeColor: string;
    disabled: boolean;
}>;
export default _default;
