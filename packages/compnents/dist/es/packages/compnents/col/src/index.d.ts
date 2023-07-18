import type { ExtractPropTypes } from "vue";
import Col from "./col.vue";
export declare const RowJustify: readonly ["start", "center", "end", "space-around", "space-between", "space-evenly"];
export declare const RowAlign: readonly ["top", "middle", "bottom"];
export declare const getPassProps: {
    span: {
        type: NumberConstructor;
        require: boolean;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    push: {
        type: NumberConstructor;
        default: number;
    };
    pull: {
        type: StringConstructor;
        validator: (val: (typeof RowAlign)[number]) => boolean;
        default: string;
    };
    xs: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    sm: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    md: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    lg: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    xl: {
        type: (NumberConstructor | ObjectConstructor)[];
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
};
export type ColProps = ExtractPropTypes<typeof getPassProps>;
export type ColInstance = InstanceType<typeof Col>;
