import Tabel from "./src/index.vue";
import type { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
declare const ZTable: SFCWithInstall<typeof Tabel>;
export { ZTable };
export default ZTable;
