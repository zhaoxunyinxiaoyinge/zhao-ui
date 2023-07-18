import type { ExtractPropTypes } from "vue";
export const getPassProps = {
        icon:{
            type:String
        }
}

export type IconProps = ExtractPropTypes<typeof getPassProps>