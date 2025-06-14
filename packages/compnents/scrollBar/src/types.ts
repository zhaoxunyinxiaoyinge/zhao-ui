import type { ExtractPropTypes } from "vue";
export const getPassProps = {
    height:{
        type:Number,String
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
        type:String
    },
    "always":{
        type:Boolean
    },
    "min-size":{
        type:Number
    }

}

export type ScrollbarProps = ExtractPropTypes<typeof getPassProps>