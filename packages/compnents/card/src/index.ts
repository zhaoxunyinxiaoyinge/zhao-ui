import type { Component } from "vue";
import type { PropType } from "vue";

enum shadow {
    "always", "never", "hover"
}

export const cardProps = {
    shadow: {
        type: String as PropType<keyof shadow>,
        default: 'always',
        required: true
    },
    bodyStyle: {
        type: Object as PropType<object>,
        default: {},
        required: false
    }
}

export type CardProps = typeof cardProps;