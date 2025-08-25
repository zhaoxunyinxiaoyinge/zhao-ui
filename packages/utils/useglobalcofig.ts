import {App,Ref} from "vue";
import type {GlobalConfig} from "./tokens";
import {globalconfig} from "./tokens"
//主要是为了，注册组件库时，传参的数据，可以通过，根实例provide提供注入，可以在后代组件中使用
export const  useGlobalConfig=(app:App,options:Ref<GlobalConfig|{}>)=>{
      // 默认配置，就是组件注册时，默认有的配置
      let defaultConfig={
            size:"medium",
            zIndex:2000
      };
      options.value={...defaultConfig,...options.value}
      app.provide(globalconfig,options as GlobalConfig)
}