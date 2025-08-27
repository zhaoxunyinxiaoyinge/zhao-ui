import type { Plugin } from 'vue';
import Header from './src/index.vue';
export type ButtonInstance = InstanceType<typeof Header>;
export type SFCWithInstall<T> = T & Plugin;
export type { headerPropsType } from './src/types';
declare const ZHeader: SFCWithInstall<typeof Header>;
export { ZHeader };
export default ZHeader;
