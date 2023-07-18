import type { ExtractPropTypes, Component } from "vue";
export const getPassProps = {
    type: {
        type: String
    },
    underline: {
        type: Boolean,
        default: true
    },
    href: {
        type: String,
        default:''
    },
    icon: {
        type: String,
        default:""
    }
}

export type LinkProps = ExtractPropTypes<typeof getPassProps>