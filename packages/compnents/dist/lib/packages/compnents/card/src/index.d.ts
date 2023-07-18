import type { PropType } from "vue";
export declare const cardProps: {
    shadow: {
        type: PropType<"toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString">;
        default: string;
        required: boolean;
    };
    bodyStyle: {
        type: PropType<object>;
        default: {};
        required: boolean;
    };
};
export type CardProps = typeof cardProps;
