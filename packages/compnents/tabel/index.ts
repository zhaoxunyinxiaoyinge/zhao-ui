import Tabel from "./src/index.vue";
import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
const ZTable: SFCWithInstall<typeof Tabel> = Tabel as SFCWithInstall<typeof Tabel>;
ZTable.install = (app: App) => {
  app.component(ZTable.name as string, ZTable);
};

export {
  ZTable
}
export default ZTable;
