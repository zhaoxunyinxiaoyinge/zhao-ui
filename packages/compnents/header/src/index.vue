<template>
  <header :class="blockClasss" :style="style">
    <slot></slot>
  </header>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { createNamespace,} from "@zhao/utils";
import { getHeaderProps } from "./types";
  export default defineComponent({
  name: 'Header',
  props: getHeaderProps,
  setup(props) { 
    // 生成组件类型和属性
    const nb = createNamespace('header');
    const blockClasss = nb.b();
    //直接给当前组件顶部元素上设自定义变量
    const style=computed(() => {
      return nb.cssVarBlock({height: props.height});
    });

    return {
      blockClasss,
      props,
      style
    }
  }})
</script>