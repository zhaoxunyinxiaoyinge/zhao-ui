type ModelValueType = boolean | number | string;
type __VLS_Props = {
    disabled: boolean;
    indeterminate: boolean;
    name: string;
    value: string;
    border: boolean;
    size: string;
    checked: boolean;
    label: string;
};
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: ModelValueType;
};
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: ModelValueType | undefined) => any;
} & {
    change: (value: ModelValueType) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: (value: ModelValueType) => any;
    "onUpdate:modelValue"?: (value: ModelValueType | undefined) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
