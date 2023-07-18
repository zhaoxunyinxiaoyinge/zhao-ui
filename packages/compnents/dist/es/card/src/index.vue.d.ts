import { StyleValue } from "vue";
declare const _default: import("vue").DefineComponent<{
    shadow: {
        type: import("vue").PropType<"toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString">;
        default: string;
        required: boolean;
    };
    bodyStyle: {
        type: import("vue").PropType<object>;
        default: {};
        required: boolean;
    };
}, {
    classes: import("vue").ComputedRef<string[]>;
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    header: import("vue").Slot | undefined;
    bodyStyle: import("vue").ComputedRef<StyleValue>;
    body: import("vue").Slot | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    shadow: {
        type: import("vue").PropType<"toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString">;
        default: string;
        required: boolean;
    };
    bodyStyle: {
        type: import("vue").PropType<object>;
        default: {};
        required: boolean;
    };
}>>, {
    shadow: "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString";
    bodyStyle: object;
}>;
export default _default;
