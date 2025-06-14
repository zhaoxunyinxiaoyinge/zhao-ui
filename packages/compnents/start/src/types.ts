import {type ExtractPropTypes} from "vue";

export  const startProps = {
   maxValue: {
      type: Number,
      default: 5
    },
    value: {
      type: Number,
      default: 4
    },
    activeColor: {
      type: String,
      default: 'gold'
    },
    disabled: {
      type: Boolean,
      default: false
    }}
export type StartProps = ExtractPropTypes<typeof startProps>;