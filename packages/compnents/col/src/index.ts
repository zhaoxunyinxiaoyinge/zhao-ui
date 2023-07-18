import type { ExtractPropTypes } from "vue";
import Col from "./col.vue";

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
    span: {
        type: Number,
        require:false,
        default:1
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
        type: String,
        validator:(val:typeof RowAlign[number])=>RowAlign.includes(val),
        default: 'top',
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