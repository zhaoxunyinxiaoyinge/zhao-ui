<template>
  <aside :class="blockClasss" :style="style">
    <slot></slot>
  </aside>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { createNamespace,} from "@zhao/utils";
import { asideProps } from "./types";
  export default defineComponent({
  name: 'aside',
  props: asideProps,
  setup(props) { 
    // 生成组件类型和属性
    const nb = createNamespace('aside');
    const blockClasss = nb.b();
    //直接给当前组件顶部元素上设自定义变量
    const style=computed(() => {
      return nb.cssVarBlock({width: typeof props.width==="string"?props.width:`${props.width}px`});
    });

    return {
      blockClasss,
      props,
      style
    }
  }})
</script>
