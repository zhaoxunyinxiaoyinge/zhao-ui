import type { ExtractPropTypes } from "vue";
export declare const getPassProps: {
    height: {
        type: NumberConstructor;
        String: StringConstructor;
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
    };
    always: {
        type: BooleanConstructor;
    };
    "min-size": {
        type: NumberConstructor;
    };
};
export type ScrollbarProps = ExtractPropTypes<typeof getPassProps>;
