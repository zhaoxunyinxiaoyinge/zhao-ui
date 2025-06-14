import ScrollBar from "./src/index.vue";
import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
const ZScrollBarBar=ScrollBar as SFCWithInstall<typeof ScrollBar>
ZScrollBarBar.install =(app:App)=> {
    app.component("ZScrollBar", ScrollBar);
};
export type ScrollBarInstance = InstanceType<typeof ScrollBar>;
export type { ScrollbarProps} from "./src/types";
export {
    ZScrollBarBar
}
export default ZScrollBarBar;


