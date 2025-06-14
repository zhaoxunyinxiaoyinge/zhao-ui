import type { ExtractPropTypes } from "vue";
export const getPassProps = {
        icon:{
            type:String,
            require:false,
            default:'default',
            value:"",
        }
}

export type IconProps = ExtractPropTypes<typeof getPassProps>