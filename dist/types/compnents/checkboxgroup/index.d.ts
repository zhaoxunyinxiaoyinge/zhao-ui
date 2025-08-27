import type { Plugin } from 'vue';
import checkboxgroup from "./src/index.vue";
export type CheckboxGroupInstance = InstanceType<typeof checkboxgroup>;
export type SFCWithInstall<T> = T & Plugin;
declare const ZCheckboxGroup: SFCWithInstall<typeof checkboxgroup>;
export { ZCheckboxGroup };
export default ZCheckboxGroup;
