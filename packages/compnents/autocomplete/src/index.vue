<script  lang="ts" >
import { defineComponent } from 'vue';
import { getPassProps } from './types';

 export default defineComponent({
   name: 'Autocomplete',
   props: getPassProps,
   setup(props) {
     return {
       props
     };
   }
 })

</script>

<template>
    <div>
        <span>{{ props.msg }}</span>
    </div>
</template>