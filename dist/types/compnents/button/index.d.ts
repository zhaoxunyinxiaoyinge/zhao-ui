import type { Plugin } from 'vue';
import Button from './src/buttons.vue';
export type ButtonInstance = InstanceType<typeof Button>;
export type SFCWithInstall<T> = T & Plugin;
export type { ButtonEmits, ButtonProps } from './src/types';
declare const ZButton: SFCWithInstall<typeof Button>;
export { ZButton };
export default ZButton;
