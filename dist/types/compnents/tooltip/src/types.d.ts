import { type ExtractPropTypes } from "vue";
export declare const tooltipProps: {
    trigger: {
        type: StringConstructor;
        default: string;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
};
export type TooltipProps = ExtractPropTypes<typeof tooltipProps>;
