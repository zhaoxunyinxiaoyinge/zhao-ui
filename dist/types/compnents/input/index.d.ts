import type { Plugin } from "vue";
import Input from "./src/index.vue";
export type ZInputInstance = InstanceType<typeof Input>;
export type SFCWithInstall<T> = T & Plugin;
declare const ZInput: SFCWithInstall<typeof Input>;
export type { inputTypes } from "./src/types";
export { ZInput };
export default ZInput;
