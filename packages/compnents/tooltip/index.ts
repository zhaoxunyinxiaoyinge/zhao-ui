
import Tooltip from "./src/index.vue";
import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
const ZTooltip=Tooltip as SFCWithInstall<typeof Tooltip>
ZTooltip.install =(app:App)=> {
    app.component("ZTooltip", Tooltip);
};  
export type TooltipInstance = InstanceType<typeof Tooltip>;
export type { TooltipProps } from "./src/types";
export default ZTooltip;
export {
  ZTooltip
}
 