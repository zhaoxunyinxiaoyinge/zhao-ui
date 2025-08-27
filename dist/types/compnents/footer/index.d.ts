import type { Plugin } from 'vue';
import Footer from './src/index.vue';
export type ButtonInstance = InstanceType<typeof Footer>;
export type SFCWithInstall<T> = T & Plugin;
export type { footerPropsType } from './src/types';
declare const ZFooter: SFCWithInstall<typeof Footer>;
export { ZFooter };
export default ZFooter;
