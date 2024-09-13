import Text from "./src/text.vue";
import type { App, Plugin, Component } from "vue";

type SFCwidthInstall<T> = T & Plugin;

const withInstall = <T>(com: T) => {
    (com as SFCwidthInstall<T>).install = function (app: App) {
        app.component((com as any)?.name, com as Component)
    }
    return com as SFCwidthInstall<T>
}

const ElText = withInstall(Text);
export {
  ElText
}
export default ElText;

declare module "vue" {
    export interface GlobalComponents {
      ElText:typeof ElText
    }
}