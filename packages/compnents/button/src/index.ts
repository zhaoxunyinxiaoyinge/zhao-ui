
import type { ExtractPropTypes,PropType } from "vue";
export const getPassProps = {
    size: {
        type: String as PropType<string>,
        require:false,
        default:'default'
    },
    type: {
        type: String,
        require:false
    },
    icon:{
        type:String,
        require:false
    }
}

export type ButtonProps = ExtractPropTypes<typeof getPassProps>