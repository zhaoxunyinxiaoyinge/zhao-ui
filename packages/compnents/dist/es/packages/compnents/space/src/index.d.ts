import type { PropType } from "vue";
interface alignment {
    alignments: "center" | "normal" | "stretch";
}
export { alignment };
export declare const spaceProps: {
    alignment: {
        type: PropType<"alignments">;
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
        type: PropType<number[]>;
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
export type SpaceProps = typeof spaceProps;
