import ConfigProvide from "./src/index.vue";
import type { Plugin } from 'vue';
export type ConfigProvideInstance = InstanceType<typeof ConfigProvide>;
export type SFCWithInstall<T> = T & Plugin;
export type { getConfigProviderPropsType } from './src/types';
declare const ZConfigProvide: SFCWithInstall<typeof ConfigProvide>;
export { ZConfigProvide };
export default ZConfigProvide;
