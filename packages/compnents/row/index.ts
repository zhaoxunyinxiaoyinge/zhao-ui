import row from "./src/row.vue";
import type { App, Plugin, Component } from "vue";

export type SFCwidthInstall<T> = T & Plugin;

const withInstall = <T>(com: T) => {
    (com as SFCwidthInstall<T>).install = function (app: App) {
        app.component((com as any)?.name, com as Component)
    }
    return com as SFCwidthInstall<T>
}

const ElRow = withInstall(row);

export {
    ElRow
}
export default ElRow;

declare module "vue" {
    export interface GlobalComponents {
      ElRow:typeof ElRow  
    }
}