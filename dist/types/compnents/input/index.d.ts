import input from "./src/index.vue";
import type { Plugin } from "vue";
export type ZInputInstance = InstanceType<typeof input>;
export type SFCWithInstall<T> = T & Plugin;
declare const ZInput: SFCWithInstall<typeof input>;
export type { inputTypes } from "./src/types";
export { ZInput };
export default ZInput;
