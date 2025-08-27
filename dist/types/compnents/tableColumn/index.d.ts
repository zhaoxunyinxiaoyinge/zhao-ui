import TabelColumn from "./src/index.vue";
import type { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
declare const ZTabelColumn: SFCWithInstall<typeof TabelColumn>;
export { ZTabelColumn };
