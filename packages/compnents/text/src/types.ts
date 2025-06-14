import type { ExtractPropTypes } from "vue";


export const sizes =[
  "large",
  "default",
  "small",
] as const;


export const types=[
"primary",
"danger",
"warning",
"info",
"success"
] as const ;

export const textProps={
  tag:{
    type:String,
    default:"span"
  },
  size:{
    type:String,
    validator:(_val:typeof sizes[number])=>sizes.includes(_val),
    default:"default"
  },
  type:{
    type:String,
    validator:(_val:typeof types[number])=>types.includes(_val),
    default:"info"
  },
  truncated:{
    type:Boolean,
    default:false
  }

}

export type textType=ExtractPropTypes<typeof textProps>
