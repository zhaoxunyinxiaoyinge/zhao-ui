import type { App,Plugin } from 'vue'
import checkboxgroup from "./src/index.vue"
// 导出组件类型
export type CheckboxGroupInstance = InstanceType<typeof checkboxgroup>
export type SFCWithInstall<T> = T & Plugin;

 const ZCheckboxGroup = checkboxgroup as SFCWithInstall<typeof checkboxgroup>;

  ZCheckboxGroup.install=(app:App,options={})=>{
      app.component("ZCheckboxGroup",checkboxgroup)
  }

export {ZCheckboxGroup}

export default ZCheckboxGroup;