<script setup lang="ts">
defineOptions({
  name: 'ZButtonGroup'
});
import type { ButtonGroupProps as ButtonGroupProp} from "./types"
import { provide } from "vue";
const buttonGroupProp = defineProps<{}>();
provide('buttonGroupProps', buttonGroupProp);
</script>
<template>
<div class="button-group">
    <slot></slot>
</div>
</template>