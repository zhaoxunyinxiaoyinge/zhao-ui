import Text from "./src/text.vue";
import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;
const ZText=Text as SFCWithInstall<typeof Text>
ZText.install = (app:App)=>{
    app.component("ZText", Text);
};
export type TextInstance = InstanceType<typeof Text>;
export type { textType } from "./src/types";
export {
  ZText
}
export default ZText;