import { type ExtractPropTypes } from "vue";
export declare const startProps: {
    maxValue: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: NumberConstructor;
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type StartProps = ExtractPropTypes<typeof startProps>;
