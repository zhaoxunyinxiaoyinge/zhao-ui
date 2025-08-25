import type { ExtractPropTypes,PropType } from "vue";
export const getPassProps = {
    height:{
        type:[Number,String] as PropType<number | string>,
        default: "400px"
    },
    maxHeight:{
        type:Number,String
    },

    native:{
        type:Boolean,
    },

    "wrap-style":{
        type:String,Object
    },

    "wrap-class":{
        type:String
    },

    "view-style":{
        type:String,
    },

    'view-class':{
        type:String
    },

    tag:{
        type:String,
        default:"div"
    },
    "always":{
        type:Boolean
    },
    "min-size":{
        type:Number
    }

}

export type ScrollbarProps = ExtractPropTypes<typeof getPassProps>