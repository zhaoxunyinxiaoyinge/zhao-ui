import type { ExtractPropTypes,PropType } from "vue";
export const getPassProps = {
        icon:{
            type:String as PropType<string>,
            require:false,
            default:'default',
            value:"",
        }
}

export type IconProps = ExtractPropTypes<typeof getPassProps>