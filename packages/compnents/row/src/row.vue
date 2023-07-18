<script lang="ts">
import { CSSProperties, computed, defineComponent, provide } from "vue";
import { getPassProps } from "./row";
import { createNamespace, rowContextKey} from "@zhao/utils";

export default defineComponent({
  name: "ElRow",
  props: getPassProps,
  setup(props) {
    provide(rowContextKey,{gutter:computed(()=>props.gutter)})
    const style = computed(() => {
      const styles: CSSProperties = {}
      if (!props.gutter) {
        return styles
      }
      styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`
      return styles
    });
    const rowKls = computed(() => {
      const nb = createNamespace("row");
      return [nb.b(),
      nb.is(`justify-${props.justify}`, props.justify !== 'start'),
      nb.is(`align-${props.align}`, props.align !== 'top'),
      ];
    });
    
    //给组件col 提供gutter 属性值
    return {
      style,
      rowKls,
      props
    }
  }
})
</script>

<template>
  <component :is="props.tag" :class="rowKls" :style="style">
    <slot />
  </component>
</template>./row