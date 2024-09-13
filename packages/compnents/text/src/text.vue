<script lang="ts">
import { computed, defineComponent } from 'vue';
import {textProps} from "./index";
import {createNamespace} from "@zhao/utils";

export default defineComponent({
  name:"ElText",
  props:textProps,
  setup(props){
    const nb=createNamespace("text");
    const classNames=computed(()=>{
      return [nb.b(),nb.m(props.size),nb.m(props.type),nb.is("truncated",props.truncated),nb.be()]
    })

    return {
      props,
      classNames
    }
  }
})
</script>

<template>
  <component :is="props.tag" :class="classNames">
    <slot></slot>
  </component>
</template>