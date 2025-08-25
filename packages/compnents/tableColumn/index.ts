import TabelColumn from "./src/index.vue";
import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
const ZTabelColumn: SFCWithInstall<typeof TabelColumn> = TabelColumn as SFCWithInstall<typeof TabelColumn>;
ZTabelColumn.install = (app: App) => {
  app.component(TabelColumn.name as string, ZTabelColumn);
};

export {
  ZTabelColumn
}