import type { Plugin } from 'vue';
import Container from './src/index.vue';
export type ContainerInstance = InstanceType<typeof Container>;
export type SFCWithInstall<T> = T & Plugin;
export type { containerPorpsType } from './src/types';
declare const ZContainer: SFCWithInstall<typeof Container>;
export { ZContainer };
export default ZContainer;
