import type { Plugin } from 'vue';
import checkbox from './src/index.vue';
export type CheckboxInstance = InstanceType<typeof checkbox>;
export type SFCWithInstall<T> = T & Plugin;
declare const ZCheckbox: SFCWithInstall<typeof checkbox>;
export { ZCheckbox };
export default ZCheckbox;
