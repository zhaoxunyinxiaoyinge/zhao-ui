import type { PropType, ExtractPropTypes } from 'vue'
enum  size {
    large = 'large',
    medium = 'medium',
    small = 'small'
}

enum type {
    default = 'default', 
    primary = 'primary',
    success = 'success',
    warning = 'warning',
    danger = 'danger',
    info = 'info'
}


export const getPassProps = {
    type: {
        type: String as PropType<type>,
        default: type.default,
        validator: (val: string) => {
            return Object.values(type).includes(val as type)
        }
    },
    size: {
        type: String as PropType<size>,
        default: size.medium,
        validator: (val: string) => {
            return Object.values(size).includes(val as size)
        }
    }
} as const

export type ButtonGroupProps = ExtractPropTypes<typeof getPassProps>