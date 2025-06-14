import Start from "./src/index.vue";
import type { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
declare const ZStart: SFCWithInstall<typeof Start>;
export type StartInstance = InstanceType<typeof Start>;
export type { StartProps } from "./src/types";
export { ZStart };
export default ZStart;
