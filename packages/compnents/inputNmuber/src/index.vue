<template>
  <div class="input-number">
    <div class="input-number__wrap">
      <input type="number">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { inputNumberProps } from "./types";
export default defineComponent({
  name: "InputNumberComponent",
  props: inputNumberProps,
  setup(props) {
    return {
      props
    }
  }
});
</script>