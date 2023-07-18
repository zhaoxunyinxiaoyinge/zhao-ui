import ScrollBars from "./src/index.vue";
import type { App, Plugin, Component } from "vue";

type SFCwidthInstall<T> = T & Plugin;

const withInstall = <T>(com: T) => {
    (com as SFCwidthInstall<T>).install = function (app: App) {
        app.component((com as any)?.name, com as Component)
    }
    return com as SFCwidthInstall<T>
}

const ScrollBar = withInstall(ScrollBars);
export {
    ScrollBar
}
export default ScrollBar;

declare module "vue" {
    export interface GlobalComponents {
        ZScrollBar: typeof ScrollBar
    }
}