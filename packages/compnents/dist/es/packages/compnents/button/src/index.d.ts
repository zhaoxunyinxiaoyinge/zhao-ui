import type { ExtractPropTypes, PropType } from "vue";
export declare const getPassProps: {
    size: {
        type: PropType<string>;
        require: boolean;
        default: string;
    };
    type: {
        type: StringConstructor;
        require: boolean;
    };
    icon: {
        type: StringConstructor;
        require: boolean;
    };
};
export type ButtonProps = ExtractPropTypes<typeof getPassProps>;
