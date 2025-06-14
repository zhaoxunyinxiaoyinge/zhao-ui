import Link from "./src/link.vue";
import type { App, Plugin } from "vue";


export type LinkInstance = InstanceType<typeof Link>;
export type SFCWithInstall<T>=T&Plugin
const ZLink =Link as SFCWithInstall<typeof Link>
ZLink.install =(app:App)=> {
    app.component("ZLink", Link); 
};  
export type { LinkProps } from "./src/types";
export {ZLink}
export default ZLink;

