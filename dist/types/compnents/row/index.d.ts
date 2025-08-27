import row from "./src/row.vue";
import type { Plugin } from "vue";
export type RowInstance = InstanceType<typeof row>;
export type SFCWithInstall<T> = T & Plugin;
declare const ZRow: SFCWithInstall<typeof row>;
export type { RowProps } from "./src/types";
export { ZRow };
export default ZRow;
