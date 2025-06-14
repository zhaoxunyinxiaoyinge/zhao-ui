import type { PropType, ExtractPropTypes } from 'vue'


 export const getPassProps={
    msg:{
        type: String,
        default: 'hello'
    },
    value: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: '请输入'
    },
    options: {
        type: Array as PropType<Array<{ label: string; value: string }>>,
        default: () => []
    },
    disabled: Boolean,
    clearable: Boolean,
    loading: Boolean,
    multiple: Boolean,
    filterable: Boolean
} as const;

export type AutocompleteProps = ExtractPropTypes<typeof getPassProps>
