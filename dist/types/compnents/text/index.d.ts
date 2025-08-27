import Text from "./src/text.vue";
import type { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
declare const ZText: SFCWithInstall<typeof Text>;
export type TextInstance = InstanceType<typeof Text>;
export type { textType } from "./src/types";
export { ZText };
export default ZText;
