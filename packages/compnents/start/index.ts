import Start from "./src/index.vue";
import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
const ZStart=Start as SFCWithInstall<typeof Start>
ZStart.install =  (app:App)=>{
        app.component("ZStart", Start);
    }

export type StartInstance = InstanceType<typeof Start>;
export type { StartProps } from "./src/types";
export {
    ZStart
}
export default ZStart;
