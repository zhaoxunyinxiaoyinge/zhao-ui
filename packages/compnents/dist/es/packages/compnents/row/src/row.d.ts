import type { ExtractPropTypes } from "vue";
import Row from "./row.vue";
export declare const RowJustify: readonly ["start", "center", "end", "space-around", "space-between", "space-evenly"];
export declare const RowAlign: readonly ["top", "middle", "bottom"];
export declare const getPassProps: {
    /**
     * @description 指定生成的元素标签
     */
    tag: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    /**
     * @description gird space
     */
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    /**
     *  @description horizontal alignment of flex layout
     */
    justify: {
        type: StringConstructor;
        validator: (val: (typeof RowJustify)[number]) => boolean;
        default: string;
    };
    /**
 *  @description align alignment of flex layout
 */
    align: {
        type: StringConstructor;
        validator: (val: (typeof RowAlign)[number]) => boolean;
        default: string;
    };
};
export type RowProps = ExtractPropTypes<typeof getPassProps>;
export type RowInstance = InstanceType<typeof Row>;
