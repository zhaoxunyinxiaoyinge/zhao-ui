<template>
    <main  :class="className">
       <slot></slot>
    </main>
</template>

<script lang="ts">
  import  { defineComponent,ref } from 'vue';
  import {createNamespace} from "@zhao/utils"
  export default defineComponent({
    name: 'main',
    setup() {
      // Setup logic can go here if needed
      const className=ref<string[]>([]);
      const nb=createNamespace('main');
      className.value.push(nb.b());
      return {
        className
      }
    }
  });
</script>