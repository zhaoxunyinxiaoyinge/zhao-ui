import col from "./src/col.vue";
import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
const ZCol=col as SFCWithInstall<typeof col>
 ZCol.install=(app:App)=>{
    app.component("ZCol",ZCol)
 }

export type {ColInstance, ColProps} from "./src/types";

export {
  ZCol
}

export default ZCol;
