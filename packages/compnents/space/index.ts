import Space from "./src/index.vue";
import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
const ZSpace=Space as SFCWithInstall<typeof Space>
 ZSpace.install =(app:App)=> {
    app.component("ZSpace", Space);
};

export {
  ZSpace
};
export type { SpaceProps } from "./src/types";
export type SpaceInstance = InstanceType<typeof Space>;

export default ZSpace;