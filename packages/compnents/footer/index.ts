import type { App,Plugin } from 'vue'
import Footer from './src/index.vue'
// 导出组件类型
export type ButtonInstance = InstanceType<typeof Footer>;
export type SFCWithInstall<T> = T & Plugin;

// 导出组件事件类型
export type {  footerPropsType } from './src/types';

 const ZFooter = Footer as SFCWithInstall<typeof Footer>;

  ZFooter.install=(app:App)=>{
      app.component("ZFooter",ZFooter)
  }


  export {ZFooter}

export default ZFooter;