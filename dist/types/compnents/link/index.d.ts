import Link from "./src/link.vue";
import type { Plugin } from "vue";
export type LinkInstance = InstanceType<typeof Link>;
export type SFCWithInstall<T> = T & Plugin;
declare const ZLink: SFCWithInstall<typeof Link>;
export type { LinkProps } from "./src/types";
export { ZLink };
export default ZLink;
