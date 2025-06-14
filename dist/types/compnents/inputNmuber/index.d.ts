import inputNumber from "./src/index.vue";
import type { Plugin } from "vue";
export type ZInputNumberInstance = InstanceType<typeof inputNumber>;
export type SFCWithInstall<T> = T & Plugin;
declare const ZInputNumber: SFCWithInstall<typeof inputNumber>;
export type { inputNumberTypes } from "./src/types";
export { ZInputNumber };
export default ZInputNumber;
