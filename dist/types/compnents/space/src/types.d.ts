import type { PropType, ExtractPropTypes } from "vue";
interface alignment {
    alignments: "center" | "normal" | "stretch";
}
export { alignment };
export declare const spaceProps: {
    alignment: {
        type: PropType<keyof alignment>;
        default: string;
        required: boolean;
    };
    class: {
        type: PropType<string>;
        default: string;
        required: boolean;
    };
    direction: {
        type: PropType<string>;
        default: string;
        required: boolean;
    };
    style: {
        type: PropType<alignment>;
        default: string;
        required: boolean;
    };
    size: {
        type: PropType<Array<number>>;
        default: string;
        required: boolean;
    };
    wrap: {
        type: PropType<boolean>;
        default: boolean;
        required: boolean;
    };
    fill: {
        type: PropType<boolean>;
        default: boolean;
        required: boolean;
    };
    fillRatio: {
        type: PropType<number>;
        default: number;
        required: boolean;
    };
    prefixCls: {
        type: PropType<string>;
        default: string;
        required: boolean;
    };
};
export type SpaceProps = ExtractPropTypes<typeof spaceProps>;
