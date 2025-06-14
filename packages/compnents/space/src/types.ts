
import type { PropType,ExtractPropTypes} from "vue";

interface alignment {
    alignments: "center" | "normal" | "stretch"
}

type arr = [
    "large",
    "default",
    "small"
]

export  {
    alignment
}

export const spaceProps = {
    alignment: {
        type: String  as PropType< keyof alignment>,
        default: "center",
        required: false
    },

    class: {
        type: String as PropType<string>,
        default: "",
        required: false
    },

    direction: {
        type: String as PropType<string>,
        default: "horizontal",
        required: true
    },

    style: {
        type: String as PropType<string> | Object as PropType<alignment>,
        default: "",
        required: false
    },

    size: {
        type: String as PropType<string> | object as  PropType<Array<number>>,
        default: "",
        required: false
    },

    wrap: {
        type: Boolean as PropType<boolean>,
        default: false,
        required: false
    },

    fill: {
        type: Boolean as PropType<boolean>,
        default: false,
        required: false
    },

    fillRatio: {
        type: Number as PropType<number>,
        default: 0,
        required: false
    },
    prefixCls:{
        type:String  as PropType<string>,
        default:"",
        required:false
    }

}

export type SpaceProps = ExtractPropTypes< typeof spaceProps>;