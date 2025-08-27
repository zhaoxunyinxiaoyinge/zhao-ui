import type { Plugin } from 'vue';
import Aside from './src/index.vue';
export type ButtonInstance = InstanceType<typeof Aside>;
export type SFCWithInstall<T> = T & Plugin;
export type { asidePropsType } from './src/types';
declare const ZAside: SFCWithInstall<typeof Aside>;
export { ZAside };
export default ZAside;
