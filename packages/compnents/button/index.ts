import type { App,Plugin } from 'vue'
import Button from './src/buttons.vue'
// 导出组件类型
export type ButtonInstance = InstanceType<typeof Button>
export type SFCWithInstall<T> = T & Plugin;

// 导出组件事件类型
export type { ButtonEmits, ButtonProps } from './src/types';

 const ZButton = Button as SFCWithInstall<typeof Button>;

  ZButton.install=(app:App,options={})=>{
      app.component("ZButton",ZButton)
  }


  export {ZButton}

export default ZButton;