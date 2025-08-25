//设置所有属性的类型
import type { ExtractPropTypes, PropType } from "vue";

interface AutoSize {
  minRows?: number, 
  maxRows?: number
}

export const inputProps = {
  minlength:{
      type:[Number,String] as PropType<number|string>
  },
  maxlength:{
      type:[Number,String] as PropType<number|string>
  },
  type: {
    type: String,
    default: "text"
  },
  placeholder: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassWord: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [Number, String] as PropType<number | string>,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: 1
  },
  prefixIcon: {
    type: String,
    default: ""
  },
  suffixIcon: {
    type: String,
    default: ""
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: ""
  },
  "input-style": {
    type: [Object, String] as PropType<{ [propName: string]: any } | string>,
  },
  size: {
    type: String,
    default: 'default'
  },
  autosize:{
    type:[Boolean,Object] as PropType<AutoSize|boolean>,
    default:false
  }
}
export type inputTypes = ExtractPropTypes<typeof inputProps>

