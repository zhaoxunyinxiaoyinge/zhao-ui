import col from "./src/col.vue";
import type { App, Plugin, Component } from "vue";

export type SFCwidthInstall<T> = T & Plugin;

const withInstall = <T>(com: T) => {
    (com as SFCwidthInstall<T>).install = function (app: App) {
        app.component((com as any)?.name, com as Component)
    }
    return com as SFCwidthInstall<T>
}

const ElCol = withInstall(col);

export {
  ElCol
}
export default ElCol;

declare module "vue" {
    export interface GlobalComponents {
      ElCol:typeof ElCol  
    }
}