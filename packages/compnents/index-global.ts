import Button from "./button/src/buttons.vue"
import Card from "./card/src/index.vue"
import Icon from "./icon/src/icon.vue"
import Input from "./input/src/index.vue"
import Link from "./link/src/link.vue"
import Start from "./start/src/index.vue"

import type { App, Plugin, Component } from "vue";

export type SFCwidthInstall<T> = T & Plugin;

const withInstall = <T>(com: T[]) => {
  return (app:App)=>{
       com.forEach(item=>{
         app.component((item as any)?.name, item as Component)
     })
  }
}

const ZhaUi = withInstall([Button,Card,Icon,Input,Link,Start]);

export {
    ZhaUi
}
export default ZhaUi;

declare module "vue" {
    export interface GlobalComponents {
      ZhaUi:typeof ZhaUi  
    }
}