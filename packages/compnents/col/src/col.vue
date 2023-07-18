<script lang="ts">
import { CSSProperties, computed, defineComponent, ref } from 'vue';
import { getPassProps } from "./index"
import { inject } from 'vue';
import { createNamespace,isObject,isNumber,rowContextKey} from "@zhao/utils";
import type { InjectionKeyRow } from "@zhao/utils/tokens";
export default defineComponent({
  name: "ElCol",
  props: getPassProps,
  setup(props) {
    const { gutter } = inject<InjectionKeyRow>(rowContextKey) as InjectionKeyRow;
    const nb = createNamespace('col');
    const style = computed(() => {
      const styles: CSSProperties = {}
      if (gutter.value) {
        styles.paddingLeft = styles.paddingRight = `${gutter.value / 2}px`
      }
      return styles
    })

    const colKls = computed(() => {
      const classes: string[] = []
      const pos = ['span', 'offset', 'pull', 'push'] as const

      pos.forEach((prop) => {
        const size = props[prop]
        if (isNumber(size)) {
          if (prop === 'span') classes.push(nb.b(`${props[prop]}`))
          else if (((size as string).length ) > 0) classes.push(nb.b(`${prop}-${props[prop]}`))
        }
      })

      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
      sizes.forEach((size) => {
        if (isNumber(props[size] as number)) {
          classes.push(nb.b(`${size}-${props[size]}`))
        } else if (isObject(props[size])) {
          Object.entries(props[size]).forEach(([prop, sizeProp]) => {
            classes.push(
              prop !== 'span'
                ? nb.b(`${size}-${prop}-${sizeProp}`)
                : nb.b(`${size}-${sizeProp}`)
            )
          })
        }
      })

      // this is for the fix
      if (gutter.value) {
        classes.push(nb.is('guttered',true))
      }
      return [nb.b(), classes]
    })



    return {
      props,
      style,
      colKls
    }
  }
})
</script>
<template>
  <component :is="props.tag" :style="style" :class="colKls">
    <slot></slot>
  </component>
</template>