import type { ExtractPropTypes, PropType } from "vue";
export declare const getPassProps: {
    icon: {
        type: PropType<string>;
        require: boolean;
        default: string;
        value: string;
    };
};
export type IconProps = ExtractPropTypes<typeof getPassProps>;
