import type { App, Plugin } from "vue";
import Input from "./src/index.vue";

export  type  ZInputInstance= InstanceType<typeof Input>;
export type SFCWithInstall<T> = T & Plugin;
const ZInput=Input as SFCWithInstall<typeof Input>
 ZInput.install = (app:App)=>{
    app.component("ZInput", Input);
  } 
export type {inputTypes} from "./src/types";
export {
  ZInput
}
export default ZInput;