<script lang="ts">
import { computed, defineComponent,ComputedRef, StyleValue} from 'vue';
import {textProps} from "./types";
import {createNamespace} from "@zhao/utils";

export default defineComponent({
  name:"ElText",
  props:textProps,
  setup(props){
    const nb=createNamespace("text");
    //这里要获取额是全局配置和包裹配置

    const classNames=computed(()=>{
      return [nb.b(),nb.m(props.size),nb.m(props.type),nb.is("truncated",props.truncated)]
    })

    const style:ComputedRef<StyleValue>=computed(()=>{
      return {
        lineClamp:props['line-clamp']?props["line-clamp"]:1
      }
    })

    return {
      props,
      classNames,
      style
    }
  }
})
</script>

<template>
  <component :is="props.tag" :class="classNames" :style="style">
    <slot></slot>
  </component>
</template>