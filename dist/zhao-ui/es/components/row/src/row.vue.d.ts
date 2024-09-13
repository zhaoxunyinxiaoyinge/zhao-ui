import { CSSProperties } from "vue";
declare const _default: import("vue").DefineComponent<{
    tag: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    justify: {
        type: StringConstructor;
        validator: (val: "start" | "center" | "end" | "space-around" | "space-between" | "space-evenly") => boolean;
        default: string;
    };
    align: {
        type: StringConstructor;
        validator: (val: "top" | "middle" | "bottom") => boolean;
        default: string;
    };
}, {
    style: import("vue").ComputedRef<CSSProperties>;
    rowKls: import("vue").ComputedRef<string[]>;
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            require: boolean;
            default: string;
        };
        gutter: {
            type: NumberConstructor;
            default: number;
        };
        justify: {
            type: StringConstructor;
            validator: (val: "start" | "center" | "end" | "space-around" | "space-between" | "space-evenly") => boolean;
            default: string;
        };
        align: {
            type: StringConstructor;
            validator: (val: "top" | "middle" | "bottom") => boolean;
            default: string;
        };
    }>> & {}>>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    justify: {
        type: StringConstructor;
        validator: (val: "start" | "center" | "end" | "space-around" | "space-between" | "space-evenly") => boolean;
        default: string;
    };
    align: {
        type: StringConstructor;
        validator: (val: "top" | "middle" | "bottom") => boolean;
        default: string;
    };
}>>, {
    tag: string;
    gutter: number;
    justify: string;
    align: string;
}>;
export default _default;
