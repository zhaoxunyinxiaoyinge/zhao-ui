import type {ComputedRef,InjectionKey, ModelRef} from "vue";
import type {I18n} from "vue-i18n"
 interface InjectionKeyRow {
  gutter:ComputedRef<number>
};

// 全局配置，传入key类型
enum Lang {"zh"="zh-cn","en"='en'}
type langObject={
  [key in Lang]?:{
    messges:Record<string,any>
  }
}
interface GlobalConfig {
  size?:string;
  zIndex?:number,
  local?:langObject,
  il18n?:I18n
}

interface InjectionConfig{
   local?:langObject,
   size:string,
   zIndex:number
}

interface InjectionCheckbox {
  min?:ComputedRef<number>,
  max?:ComputedRef<number>,
  modelValue?:ModelRef<string[]|number[]|undefined>,
  disabled?:ComputedRef<boolean>,
  textColor?:ComputedRef<string>,
  fill?:ComputedRef<string>,
  validateEvent?:ComputedRef<boolean>,
  label?:ComputedRef<string>
}

 const rowContextKey:InjectionKey<InjectionKeyRow>=Symbol("rowContextKey");
 const configKey:InjectionKey<InjectionConfig>=Symbol("");
 const globalconfig:InjectionKey<GlobalConfig>=Symbol("");
 const checkboxgroupConfig:InjectionKey<InjectionCheckbox>=Symbol("");

 export {
  rowContextKey,
  configKey, 
  globalconfig,
  checkboxgroupConfig
 }

 export  type{
  InjectionKeyRow,
  InjectionConfig,
  GlobalConfig,
  langObject
 }


