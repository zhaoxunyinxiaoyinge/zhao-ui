import Icon from "./src/icon.vue";
import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
//导出实例
export  type IconInstance= InstanceType<typeof Icon>;
const ZIcon=Icon as SFCWithInstall<typeof Icon>
  ZIcon.install = (app:App)=>{
    app.component("ZIcon", Icon);

};

export type {IconProps} from "./src/types";
export {
  ZIcon
}
export default ZIcon;