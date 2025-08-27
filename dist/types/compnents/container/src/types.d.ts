import { PropType, ExtractPropTypes } from "vue";
declare enum ContainerDirection {
    Horizontal = "horizontal",
    Vertical = "vertical"
}
export declare const containerProps: {
    direction: {
        type: PropType<ContainerDirection>;
        default: ContainerDirection;
    };
};
export type containerPorpsType = ExtractPropTypes<typeof containerProps>;
export {};
