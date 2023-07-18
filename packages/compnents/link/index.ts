import Link from "./src/link.vue";
import type { App, Plugin, Component } from "vue";

type SFCwidthInstall<T> = T & Plugin;

const withInstall = <T>(com: T) => {
    (com as SFCwidthInstall<T>).install = function (app: App) {
        app.component((com as any)?.name, com as Component)
    }
    return com as SFCwidthInstall<T>
}

const Links = withInstall(Link);
export {
    Links
}
export default Links;

declare module "vue" {
    export interface GlobalComponents {
        ZLinks:typeof Links
    }
}