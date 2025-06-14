import row from "./src/row.vue";
import type { App, Plugin } from "vue";

export type RowInstance = InstanceType<typeof row>;
export type SFCWithInstall<T> = T & Plugin;
const ZRow=row as SFCWithInstall<typeof row>
 ZRow.install = (app:App)=>{
    app.component("ZRow", row);
  }
export type { RowProps } from "./src/types";
export {
  ZRow
}
export default ZRow;