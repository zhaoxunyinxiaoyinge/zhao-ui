import Card from "./src/index.vue";
import type { App, Plugin, Component } from "vue";

type SFCwidthInstall<T> = T & Plugin;

const withInstall = <T>(com: T) => {
    (com as SFCwidthInstall<T>).install = function (app: App) {
        app.component((com as any)?.name, com as Component)
    }
    return com as SFCwidthInstall<T>
}

const ElCard = withInstall(Card);
export {
    ElCard
}
export default ElCard;

declare module "vue" {
    export interface GlobalComponents {
        ZElCard:typeof ElCard
    }
}