declare const _default: import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassWord: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    suffixIcon: {
        type: StringConstructor;
        default: string;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    "input-style": {
        type: import("vue").PropType<string | {
            [propName: string]: any;
        }>;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}, {
    type: string;
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    modelValue: string | number;
    rows: number;
    prefixIcon: string;
    suffixIcon: string;
    showWordLimit: boolean;
    maxlength: number;
    name: string;
    inputStype: string | {
        [propName: string]: any;
    } | undefined;
    size: string;
    textareaText: import("vue").Ref<string>;
    input: import("vue").Ref<HTMLInputElement | undefined>;
    onBlur: (val: Event) => void;
    onFocus: (val: Event) => void;
    onInput: (val: any) => void;
    change: (val: string) => void;
    isEixstSlot: () => {
        append: boolean;
        prepend: boolean;
    };
    handleKeyUp: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "focus" | "change" | "input" | "clear" | "update:modelValue")[], "blur" | "focus" | "change" | "input" | "clear" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassWord: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    suffixIcon: {
        type: StringConstructor;
        default: string;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    "input-style": {
        type: import("vue").PropType<string | {
            [propName: string]: any;
        }>;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onBlur?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onInput?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onClear?: (...args: any[]) => any;
    "onUpdate:modelValue"?: (...args: any[]) => any;
}, {
    name: string;
    type: string;
    placeholder: string;
    clearable: boolean;
    showPassWord: boolean;
    disabled: boolean;
    modelValue: string | number;
    readonly: boolean;
    rows: number;
    prefixIcon: string;
    suffixIcon: string;
    showWordLimit: boolean;
    maxlength: number;
    size: string;
}>;
export default _default;
