import Card from "./src/index.vue";
import type { App, Plugin} from "vue";

const ZCard = Card as SFCWithInstall<typeof Card>;
export type SFCWithInstall<T> = T & Plugin;
 ZCard.install=(app:App)=>{
    app.component("ZCard",ZCard);
 }

//导出card实例类型
export type CardInstance = InstanceType<typeof 
Card>;
export type { CardProps } from "./src/types";
export {
  ZCard
}

export default ZCard