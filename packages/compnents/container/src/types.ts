import { PropType, ExtractPropTypes } from "vue";

enum ContainerDirection {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}

export const containerProps = {
  direction: {
    type: String as PropType<ContainerDirection>,
    default: ContainerDirection.Horizontal
  }
}

export type containerPorpsType=ExtractPropTypes<typeof containerProps>
