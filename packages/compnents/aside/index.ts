import type { App,Plugin } from 'vue'
import Aside from './src/index.vue'
// 导出组件类型
export type ButtonInstance = InstanceType<typeof Aside>;
export type SFCWithInstall<T> = T & Plugin;

// 导出组件事件类型
export type {  asidePropsType } from './src/types';

 const ZAside = Aside as SFCWithInstall<typeof Aside>;

  ZAside.install=(app:App)=>{
      app.component("ZAside",ZAside)
  }


  export {ZAside}

export default ZAside;