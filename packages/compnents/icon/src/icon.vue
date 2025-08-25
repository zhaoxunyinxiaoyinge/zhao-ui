<template>
    <i class="iconfont" :class='["icon-"+props.icon]'>
        <slot></slot>
    </i>
</template>
<script lang="ts">
import {defineComponent} from  "vue";
import  {getPassProps} from "./types"
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