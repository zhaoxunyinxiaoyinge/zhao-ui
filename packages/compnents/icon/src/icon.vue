<template>
    <i class="iconfont" :class="[props.icon]">
        <slot></slot>
    </i>
</template>
<script lang="ts">
import {defineComponent,computed} from  "vue";
import  {getPassProps} from "./icon"
    export default defineComponent({
        name:"ZIcon",
        props:getPassProps,
        setup(props){
            return {  
                props  
            }
        }
    })
</script>