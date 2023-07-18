import Space from "./src/index.vue";
import type { App, Plugin, Component } from "vue";

type SFCwidthInstall<T> = T & Plugin;

const withInstall = <T>(com: T) => {
    (com as SFCwidthInstall<T>).install = function (app: App) {
        app.component((com as any)?.name, com as Component)
    }
    return com as SFCwidthInstall<T>
}

const ElSpace = withInstall(Space);
export {
    ElSpace
}
export default ElSpace;

declare module "vue" {
    export interface GlobalComponents {
        ZElSpace: typeof ElSpace
    }
}