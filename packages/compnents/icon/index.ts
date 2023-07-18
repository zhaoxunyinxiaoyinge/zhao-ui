import Icon from "./src/icon.vue";
import type { App, Plugin,Component } from "vue";

type SFCwidthInstall<T> = T & Plugin;

const  withInstall = <T>(com:T) => {
    (com as SFCwidthInstall<T>).install = function (app: App) {
        app.component((com as any).name, com as Component)
    }
    return com as SFCwidthInstall<T>
}

const ZIcon = withInstall(Icon);
export  {
    ZIcon
}


export default ZIcon;

declare module "vue" {
    export interface GlobalComponents {
        ZIcons: typeof ZIcon;
    }
  }