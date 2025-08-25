import type { App,Plugin } from 'vue'
import checkbox from './src/index.vue'
// 导出组件类型
export type CheckboxInstance = InstanceType<typeof checkbox>
export type SFCWithInstall<T> = T & Plugin;


 const ZCheckbox = checkbox as SFCWithInstall<typeof checkbox>;

  ZCheckbox.install=(app:App,options={})=>{
      app.component("ZCheckbox",ZCheckbox)
  }


  export {ZCheckbox}

export default ZCheckbox;