import Tooltip from "./src/index.vue";
import type { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
declare const ZTooltip: SFCWithInstall<typeof Tooltip>;
export type TooltipInstance = InstanceType<typeof Tooltip>;
export type { TooltipProps } from "./src/types";
export default ZTooltip;
export { ZTooltip };
