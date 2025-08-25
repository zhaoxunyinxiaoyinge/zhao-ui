<script setup lang="ts">
import { createNamespace } from "@zhao/utils";
import { checkboxgroupConfig } from "@zhao/utils/tokens"
import { watch, provide, computed } from "vue";
defineOptions({
  name: "z-checkbox-group"
})
const nb = createNamespace("checkbox-group");
const model = defineModel<number[] | string[]>();
const { tag = 'div', min, max } = defineProps<{
  tag: string,
  min: number,
  max: number
}>();

const emit = defineEmits<{
  (e: "change", value: Array<string | number>): void
}>();

provide(checkboxgroupConfig, {
  modelValue: model,
  min: computed(() => min),
  max: computed(() => max)
});

watch(() => model.value, (val, oldVal) => {
  if (val !== oldVal) {
    emit("change", val as Array<string | number>);
  }
})

</script>
<template>
  <component :is="tag" :class="[nb.b()]">
    <slot></slot>
  </component>
</template>