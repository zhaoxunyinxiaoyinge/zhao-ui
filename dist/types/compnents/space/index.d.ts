import Space from "./src/index.vue";
import type { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
declare const ZSpace: SFCWithInstall<typeof Space>;
export { ZSpace };
export type { SpaceProps } from "./src/types";
export type SpaceInstance = InstanceType<typeof Space>;
export default ZSpace;
