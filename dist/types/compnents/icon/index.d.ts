import Icon from "./src/icon.vue";
import type { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
export type IconInstance = InstanceType<typeof Icon>;
declare const ZIcon: SFCWithInstall<typeof Icon>;
export type { IconProps } from "./src/types";
export { ZIcon };
export default ZIcon;
