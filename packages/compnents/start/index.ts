import Start from "./src/index.vue";
import type { App, Plugin, Component } from "vue";

type SFCwidthInstall<T> = T & Plugin;

const withInstall = <T>(com: T) => {
    (com as SFCwidthInstall<T>).install = function (app: App) {
        app.component((com as any)?.name, com as Component)
    }
    return com as SFCwidthInstall<T>
}

const ElStart = withInstall(Start);
export {
    ElStart
}
export default ElStart;

declare module "vue" {
    export interface GlobalComponents {
        ZElStart:typeof ElStart
    }
}