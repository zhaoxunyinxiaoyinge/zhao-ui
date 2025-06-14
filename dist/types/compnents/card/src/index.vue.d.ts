import { StyleValue } from "vue";
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    shadow: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    bodyStyle: {
        type: import("vue").PropType<object>;
        default: {};
        required: boolean;
    };
}>, {
    classes: import("vue").ComputedRef<string[]>;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    header: import("vue").Slot<any> | undefined;
    bodyStyle: import("vue").ComputedRef<StyleValue>;
    body: import("vue").Slot<any> | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    shadow: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    bodyStyle: {
        type: import("vue").PropType<object>;
        default: {};
        required: boolean;
    };
}>> & Readonly<{}>, {
    shadow: string;
    bodyStyle: object;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
