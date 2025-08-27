import col from "./src/col.vue";
import type { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
declare const ZCol: SFCWithInstall<typeof col>;
export type { ColInstance, ColProps } from "./src/types";
export { ZCol };
export default ZCol;
