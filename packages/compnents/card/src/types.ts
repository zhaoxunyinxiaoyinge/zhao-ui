
import type { ExtractPropTypes, PropType } from "vue";
const  shadow=[
    "always", "never", "hover"
] as const;

export const cardProps = {
    shadow: {
        type: String,
        default:"always",
        required: true
    },
    bodyStyle: {
        type: Object as PropType<object>,
        default: {},
        required: false
    }
}

export type CardProps =ExtractPropTypes<typeof cardProps>;