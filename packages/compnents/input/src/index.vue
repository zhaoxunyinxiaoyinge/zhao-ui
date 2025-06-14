<script lang="ts">
import { defineComponent } from "vue";
import { inputProps } from "./types";

export default defineComponent({
  name: "InputComponent",
  props:inputProps,
  setup(props){
    return {
      props
    }
  }
});
</script>

<template>
  <div class="input">
    <input type="text" v-if="props.type" />
  </div>
</template>