import inputNumber from "./src/index.vue";
import type { App, Plugin } from "vue";

export type ZInputNumberInstance = InstanceType<typeof inputNumber>;
export type SFCWithInstall<T> = T & Plugin;
const ZInputNumber=inputNumber as SFCWithInstall<typeof inputNumber>
 ZInputNumber.install =(app:App)=> {
    app.component("ZInputNumber", inputNumber);
};
export type {inputNumberTypes} from "./src/types";
export {
  ZInputNumber
}

export default ZInputNumber;


