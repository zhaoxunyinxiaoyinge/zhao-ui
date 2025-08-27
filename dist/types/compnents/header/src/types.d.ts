import { PropType, ExtractPropTypes } from "vue";
export declare const getHeaderProps: {
    height: {
        type: PropType<string | number>;
        default: string;
    };
};
export type headerPropsType = ExtractPropTypes<typeof getHeaderProps>;
