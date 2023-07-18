import type { ExtractPropTypes, PropType } from "vue";

const inputNumberProps= {
    min:{
      type:Number,
      default:-Infinity
    },
    max:{
      type:Number,
      default:Infinity
    },
    step:{
      type:Number,
      default:1
    },
    "step-strictly":{
      type:Boolean,
      default:false
    },
    precision:{
      type:Number,
      default:0
    },

    size:{
      type:String,
      default:[String] as PropType<'small'|"default"|'large'>
    },
    readonly:{
      type:Boolean,
      default:false
    },
    disabled:{
      type:Boolean,
      default:false
    },
    controls:{
      type:Boolean,
      default:false
    },
    "controls-position":{
        type:String,
        default:String as PropType<""|'right'>
    },
    name:{
      type:String,
      default:""
    },

    placeholder:{
      type:String,
      default:""
    },

    id:{
      type:String,
      default:""
    },

    

}

export type inputNumberTypes = ExtractPropTypes<typeof inputNumberProps>