import type { Plugin } from 'vue';
import Main from './src/index.vue';
export type ButtonInstance = InstanceType<typeof Main>;
export type SFCWithInstall<T> = T & Plugin;
declare const ZMain: SFCWithInstall<typeof Main>;
export { ZMain };
export default ZMain;
