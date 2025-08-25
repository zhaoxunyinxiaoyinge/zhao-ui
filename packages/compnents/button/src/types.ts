import type { PropType, ExtractPropTypes } from 'vue'

export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
export type ButtonSize = 'large' | 'default' | 'small'

export const getPassProps = {
    tag:{
        type:String as PropType<'button' | 'a' | 'div'>,
        default: 'button'
    },
    type: {
        type: String as PropType<ButtonType>,
        default: 'default',
        validator: (val: string) => {
            return ['default', 'primary', 'success', 'warning', 'danger', 'info'].includes(val)
        }
    },
    size: {
        type: String as PropType<ButtonSize>,
        default: 'default',
        validator: (val: string) => {
            return ['large', 'default', 'small'].includes(val)
        }
    },
    icon: {
        type: String,
        default: ''
    },
    disabled: {
        type:Boolean,
        default:false
        
    }
 
} as const

export type ButtonProps = ExtractPropTypes<typeof getPassProps>

export type ButtonEmits = {
    click: (evt: MouseEvent) => void
}