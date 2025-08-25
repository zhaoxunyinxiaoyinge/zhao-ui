import { ExtractPropTypes, PropType } from "vue";


export const asideProps = {
  width: {
    type: [String, Number] as PropType<string | number>,
    default: '200px'
  }
};


export type asidePropsType = ExtractPropTypes<typeof asideProps>;