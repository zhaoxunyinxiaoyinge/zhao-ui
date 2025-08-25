<template>
  <section :class="className"  >
      <slot></slot>
  </section>
</template>
<script lang="ts">
import { Component, defineComponent,ref,useSlots, VNode} from 'vue';
import { containerProps } from "./types"
import  {createNamespace} from "@zhao/utils"
export default defineComponent({
  name: 'Container',
  props: containerProps,
  setup(props) {
    const className=ref<string[]>([]);
    // 生成组件类型和属性
    const nb = createNamespace('container');
    const blockClasss=nb.b();
    className.value.push(blockClasss);
    // 判断组件的插槽子元素是否包含 header, aside, footer, main;
    const slots = useSlots();
    console.log(slots.default? slots.default() : []);
    const slotNames:any =slots?.default ? slots.default() :[];
    if (props.direction==='vertical'||(slotNames.some(item=>item.type.name=="Header")||slotNames.some(item=>item.type.name==="Footer"))) {
      className.value.push(nb.is('vertical',true));
    } 
    return {
      className,
    }
  }
  });
</script>