import buttonGroup from "./src/button-group.vue";
import type { App,Plugin } from 'vue'
export type ButtonGroupInstance = InstanceType<typeof buttonGroup>
export type SFCWithInstall<T> = T & Plugin;

const ZButtonGroup = buttonGroup as SFCWithInstall<typeof buttonGroup>;
export type { ButtonGroupProps,getPassProps } from './src/types';
ZButtonGroup.install = (app: App) => {
    app.component("ZButtonGroup", ZButtonGroup);
};

export { ZButtonGroup };
export default ZButtonGroup;
