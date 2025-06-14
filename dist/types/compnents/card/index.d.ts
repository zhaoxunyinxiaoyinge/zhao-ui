import Card from "./src/index.vue";
import type { Plugin } from "vue";
declare const ZCard: SFCWithInstall<typeof Card>;
export type SFCWithInstall<T> = T & Plugin;
export type CardInstance = InstanceType<typeof Card>;
export type { CardProps } from "./src/types";
export { ZCard };
export default ZCard;
