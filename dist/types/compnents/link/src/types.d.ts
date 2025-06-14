import type { ExtractPropTypes } from "vue";
export declare const getPassProps: {
    type: {
        type: StringConstructor;
    };
    underline: {
        type: BooleanConstructor;
        default: boolean;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
};
export type LinkProps = ExtractPropTypes<typeof getPassProps>;
