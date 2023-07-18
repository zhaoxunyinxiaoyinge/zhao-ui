import Buttons from "./src/buttons.vue";
import type { App, Plugin, Component } from "vue";

export type SFCwidthInstall<T> = T & Plugin;

const withInstall = <T>(com: T) => {
    (com as SFCwidthInstall<T>).install = function (app: App) {
        app.component((com as any)?.name, com as Component)
    }
    return com as SFCwidthInstall<T>
}

const Button = withInstall(Buttons);

export {
    Button
}
export default Button;

declare module "vue" {
    export interface GlobalComponents {
        Button:typeof Button  
    }
}