import type { ExtractPropTypes, PropType } from "vue";
export declare const cardProps: {
    shadow: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    bodyStyle: {
        type: PropType<object>;
        default: {};
        required: boolean;
    };
};
export type CardProps = ExtractPropTypes<typeof cardProps>;
