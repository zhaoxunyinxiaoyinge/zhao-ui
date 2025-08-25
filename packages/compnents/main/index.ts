import type { App,Plugin } from 'vue'
import Main from './src/index.vue'
// 导出组件类型
export type ButtonInstance = InstanceType<typeof Main>;
export type SFCWithInstall<T> = T & Plugin;


 const ZMain = Main as SFCWithInstall<typeof Main>;

  ZMain.install=(app:App)=>{
      app.component("ZMain",ZMain)
  }


  export {ZMain}

export default ZMain;