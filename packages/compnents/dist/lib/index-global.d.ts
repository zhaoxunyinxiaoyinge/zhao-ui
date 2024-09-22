import type { App, Plugin } from "vue";
export type SFCwidthInstall<T> = T & Plugin;
declare const ZhaUi: (app: App) => void;
export { ZhaUi };
export default ZhaUi;
declare module "vue" {
    interface GlobalComponents {
        ZhaUi: typeof ZhaUi;
    }
}
