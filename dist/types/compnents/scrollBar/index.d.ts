import ScrollBar from "./src/index.vue";
import type { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
declare const ZScrollBarBar: SFCWithInstall<typeof ScrollBar>;
export type ScrollBarInstance = InstanceType<typeof ScrollBar>;
export type { ScrollbarProps } from "./src/types";
export { ZScrollBarBar };
export default ZScrollBarBar;
