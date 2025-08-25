
import { PropType,ExtractPropTypes } from "vue";

export  const footerProps={
  height:{
    type:[String,Number] as PropType<string|number>,
    default:"50px"
  }
}


export type footerPropsType = ExtractPropTypes<typeof footerProps>;