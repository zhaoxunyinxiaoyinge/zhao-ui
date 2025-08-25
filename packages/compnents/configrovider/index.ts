import ConfigProvide from "./src/index.vue";
import type { App,Plugin } from 'vue'
// 导出组件类型
export type ConfigProvideInstance = InstanceType<typeof ConfigProvide>
export type SFCWithInstall<T> = T & Plugin;

// 导出组件事件类型
export type { getConfigProviderPropsType } from './src/types';

 const ZConfigProvide = ConfigProvide as SFCWithInstall<typeof ConfigProvide>;

  ZConfigProvide.install=(app:App,options={})=>{
      app.component("ZConfigProvide",ZConfigProvide)
  }
export {ZConfigProvide}
export default ZConfigProvide;
