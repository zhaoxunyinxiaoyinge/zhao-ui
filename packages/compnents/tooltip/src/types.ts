import {type ExtractPropTypes} from "vue"

export  const tooltipProps = {
  trigger: {
    type: String,
    default: "hover",
  },  
  placement: {
    type: String,
    default: "top",
  },
  content: {
    type: String,
    default: "",
  }};


 export  type TooltipProps = ExtractPropTypes<typeof tooltipProps>;