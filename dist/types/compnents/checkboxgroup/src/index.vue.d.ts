type __VLS_Props = {
    tag: string;
    min: number;
    max: number;
};
type __VLS_PublicProps = __VLS_Props & {
    modelValue?: number[] | string[];
};
declare var __VLS_7: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_7) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string[] | number[] | undefined) => any;
} & {
    change: (value: (string | number)[]) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onChange?: (value: (string | number)[]) => any;
    "onUpdate:modelValue"?: (value: string[] | number[] | undefined) => any;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
