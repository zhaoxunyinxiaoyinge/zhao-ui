import type { ExtractPropTypes, PropType } from "vue";
export declare const getPassProps: {
    height: {
        type: PropType<number | string>;
        default: string;
    };
    maxHeight: {
        type: NumberConstructor;
        String: StringConstructor;
    };
    native: {
        type: BooleanConstructor;
    };
    "wrap-style": {
        type: StringConstructor;
        Object: ObjectConstructor;
    };
    "wrap-class": {
        type: StringConstructor;
    };
    "view-style": {
        type: StringConstructor;
    };
    'view-class': {
        type: StringConstructor;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    always: {
        type: BooleanConstructor;
    };
    "min-size": {
        type: NumberConstructor;
    };
};
export type ScrollbarProps = ExtractPropTypes<typeof getPassProps>;
