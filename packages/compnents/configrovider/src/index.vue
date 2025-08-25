<template> 
    <div :class="className">
      <slot></slot>
    </div>
</template>
<script lang="ts">
import { defineComponent, inject,provide,Ref,isRef,ref} from 'vue';
import {createNamespace} from "@zhao/utils";
import {getConfigProviderProps} from "./types";
import {configKey,type InjectionConfig,type GlobalConfig,globalconfig,type langObject} from "./../../../utils/tokens"

   export default defineComponent({
      name:"ZConfigProvide",
      props:getConfigProviderProps,
      setup(props){
        const nb=createNamespace("config-provider");
        //这里先获取全局组件跟组件配置，然后再后取，获取，嵌套可配置，如果有嵌套配置，直接用嵌套配置和当前配置进行覆盖，否则，将当前配置，和全局配置合并覆盖;
        let globalConfig=inject<Ref<GlobalConfig>|{size:string,zIndex:number}>(globalconfig,{size:"meduim",zIndex:0});
        let config:Ref<InjectionConfig>=ref({size:"",zIndex:0});
        let outConfigProvide=inject<Ref<InjectionConfig>|null>(configKey,null);

          //这里表示全局配置，是否传入了值，那么最终合并的要看当前是否传值
        if(outConfigProvide){
          if(isRef<GlobalConfig>(globalConfig)){
            if(props.size){
                config.value={...outConfigProvide.value,zIndex:globalConfig.value.zIndex as number,local:globalConfig.value.local as langObject,size:props.size}
            }
            else if(props.zIndex){
                config.value={...outConfigProvide.value,zIndex:props.zIndex,local:globalConfig.value.local as langObject}
            }else{
                config.value={...outConfigProvide.value,size:globalConfig.value.size as string,zIndex:globalConfig.value.zIndex as number,local:globalConfig.value.local as langObject}
            }
          }else{
              config.value={...outConfigProvide.value,size:globalConfig.size as string,zIndex:globalConfig.zIndex as number,}
          }
        }else{
           if(isRef<GlobalConfig>(globalConfig)){
            if(props.size){
                config.value={zIndex:globalConfig.value.zIndex as number,local:globalConfig.value.local as langObject,size:props.size}
            }
             if(props.zIndex){
                config.value={zIndex:props.zIndex,local:globalConfig.value.local as langObject,size:globalConfig.value.size as string} 
            }
            if(!props.size&&!props.zIndex){
                config.value={size:globalConfig.value.size as string,zIndex:globalConfig.value.zIndex as number,local:globalConfig.value.local as langObject}
            }
          }else{
            if(props.size){
               config.value={size:props.size as string,zIndex:globalConfig.zIndex as number}
            }
            if(props.zIndex){
               config.value={size:props.size as string,zIndex:props.zIndex}
            }
            if(!props.size&&!props.zIndex){
              config.value={size:globalConfig.size as string,zIndex:globalConfig.zIndex as number,}
            }
          }

           provide<Ref<InjectionConfig>>(configKey,config);
        }
        return {
          className:nb.b()
        }
      }
   })
</script>