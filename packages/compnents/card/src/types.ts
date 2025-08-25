import {StyleValue} from "vue"
import type { CSSProperties, ExtractPropTypes, PropType } from "vue";
export enum Shadow {
           "always"='always', "never"='never', "hover"='hover' 
    }
export  const  CardProps={
    header:{
        type:String
    },
    footer:{
        type:String

    },
    "body-style":{
        type:String as PropType<StyleValue>
    },
    "header-class":{
        type:String
    },
    "body-class":{
        type:String
    },
    "footer-class":{
        type:String
    },
    shadow:{
      type:String as PropType<Shadow>,
      default:"always"
    }
}


export type CardPropsType=ExtractPropTypes<typeof CardProps>