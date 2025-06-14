import input from "./src/index.vue";
import type { App, Plugin } from "vue";

export  type  ZInputInstance= InstanceType<typeof input>;
export type SFCWithInstall<T> = T & Plugin;
const ZInput=input as SFCWithInstall<typeof input>

 ZInput.install = (app:App)=>{
    app.component("ZInput", input);
  } 
export type {inputTypes} from "./src/types";
export {
  ZInput
}
export default ZInput;