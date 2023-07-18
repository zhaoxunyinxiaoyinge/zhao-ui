import type { ExtractPropTypes } from "vue";
import Row from "./row.vue";

export const RowJustify = [
    'start',
    'center',
    'end',
    'space-around',
    'space-between',
    'space-evenly',
  ] as const


export const RowAlign = ['top', 'middle', 'bottom'] as const


export const getPassProps = {
    /**
     * @description 指定生成的元素标签
     */
    tag: {
        type: String,
        require:false,
        default:'div'
    },
    /**
     * @description gird space
     */
    gutter:{
        type:Number,
        default:0
    },
    /**
     *  @description horizontal alignment of flex layout
     */
    justify:{
        type: String,
        validator:(val:typeof RowJustify[number])=>RowJustify.includes(val),
        default: 'start'
    },
        /**
     *  @description align alignment of flex layout
     */
    align: {
        type: String,
        validator:(val:typeof RowAlign[number])=>RowAlign.includes(val),
        default: 'top',
      }
}


export type RowProps = ExtractPropTypes<typeof getPassProps>

export type RowInstance = InstanceType<typeof Row>