import type { ExtractPropTypes } from "vue";
export declare const getPassProps: {
    icon: {
        type: StringConstructor;
        require: boolean;
        default: string;
        value: string;
    };
};
export type IconProps = ExtractPropTypes<typeof getPassProps>;
