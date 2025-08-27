import type { ExtractPropTypes } from "vue";
import Col from "./col.vue";
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
        type: NumberConstructor;
        default: number;
    };
    xs: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    sm: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    md: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    lg: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    xl: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
};
export type ColProps = ExtractPropTypes<typeof getPassProps>;
export type ColInstance = InstanceType<typeof Col>;
