<template>
    <div>
  <slot></slot>
  <slot name="header" v-if="$slots.header"></slot>
  </div>
</template>
<script setup lang="ts">
  defineOptions({
    name:"z-table-column"
  })
  import  {createNamespace} from "@zhao/utils/createBem";
  const nb = createNamespace("table");
  const tabelHeaderWrapper=nb.e("header-wrapper");
  const tableBodyWrapper=nb.e("body-wrapper");
  const tableFooterWrapper=nb.e("footer-wrapper");

  const {label,prop,width}=defineProps<{
    label: string,
    prop: string,
    width: number
  }>()
  

</script>