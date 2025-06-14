import type { App,Plugin } from 'vue'
import Autocomplete from './src/index.vue'

// 导出组件类型
export type ButtonInstance = InstanceType<typeof Autocomplete>
export type SFCWithInstall<T> = T & Plugin;
// 导出组件事件类型
export type { AutocompleteProps } from './src/types';
const ZAutocomplete=Autocomplete as SFCWithInstall<typeof Autocomplete>
// 组件注册
 ZAutocomplete.install =(app:App)=> {
    app.component("ZAutocomplete", Autocomplete);
}

export {
  ZAutocomplete
}
export default ZAutocomplete;