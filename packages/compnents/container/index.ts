import type { App,Plugin } from 'vue'
import Container from './src/index.vue'
// 导出组件类型
export type ContainerInstance = InstanceType<typeof Container>;
export type SFCWithInstall<T> = T & Plugin;

// 导出组件事件类型
export type {  containerPorpsType } from './src/types';

 const ZContainer = Container as SFCWithInstall<typeof Container>;

  ZContainer.install=(app:App)=>{
      app.component("ZContainer",ZContainer)
  }


  export {ZContainer}

export default ZContainer;