import type { ExtractPropTypes,PropType} from "vue";


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
    type:String as PropType<"large"|"default"|"small">,
    default:"default"
  },
  type:{
    type:String as PropType<"primary" |"default"|"warning"|"info"|"success">
  },
  truncated:{
    type:Boolean,
    default:false
  },
  "line-clamp":{
    type:[Number,String]
  }

}

export type textType=ExtractPropTypes<typeof textProps>
