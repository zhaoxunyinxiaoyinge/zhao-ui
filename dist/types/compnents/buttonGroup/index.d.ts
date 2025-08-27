import buttonGroup from "./src/button-group.vue";
import type { Plugin } from 'vue';
export type ButtonGroupInstance = InstanceType<typeof buttonGroup>;
export type SFCWithInstall<T> = T & Plugin;
declare const ZButtonGroup: SFCWithInstall<typeof buttonGroup>;
export type { ButtonGroupProps, getPassProps } from './src/types';
export { ZButtonGroup };
export default ZButtonGroup;
