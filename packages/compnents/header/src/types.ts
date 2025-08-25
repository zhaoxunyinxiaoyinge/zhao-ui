import { PropType,ExtractPropTypes } from "vue";

 export  const  getHeaderProps={
    height:{
      type: [String, Number] as PropType<string | number>,
      default: '60px'
    }
 }

export type headerPropsType = ExtractPropTypes<typeof getHeaderProps>;