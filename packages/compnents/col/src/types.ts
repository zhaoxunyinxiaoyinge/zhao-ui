import type { ExtractPropTypes } from "vue";
import Col from "./col.vue";


export const getPassProps = {
    span: {
        type: Number,
        require:false,
        default:24
    },

    offset:{
        type:Number,
        default:0
    },
    push:{
        type: Number,
        default: 0
    },

    pull: {
        type: Number,
        default: 0,
      },
      xs:{
        type:[Number,Object],
        default:""
      },
      sm:{
        type:[Number,Object],
        default:""
      },
      md:{
        type:[Number,Object],
        default:""
      },
      lg:{
        type:[Number,Object],
        default:""
      },
      xl:{
        type:[Number,Object],
        default:""
      },
      tag:{
        type:String,
        default:"div"
      }
}


export type ColProps = ExtractPropTypes<typeof getPassProps>

export type ColInstance = InstanceType<typeof Col>