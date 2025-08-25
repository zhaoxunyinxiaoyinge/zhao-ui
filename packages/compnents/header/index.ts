import type { App,Plugin } from 'vue'
import Header from './src/index.vue'
// 导出组件类型
export type ButtonInstance = InstanceType<typeof Header>;
export type SFCWithInstall<T> = T & Plugin;

// 导出组件事件类型
export type {  headerPropsType } from './src/types';

 const ZHeader = Header as SFCWithInstall<typeof Header>;

  ZHeader.install=(app:App)=>{
      app.component("ZHeader",ZHeader)
  }


  export {ZHeader}

export default ZHeader;