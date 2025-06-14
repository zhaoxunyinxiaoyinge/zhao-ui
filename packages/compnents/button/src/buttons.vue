<template>
    <button ref="_ref" :disabled="disabled" class="el-button" :class="[props.size == 'large' ? 'el-button--large' : props.size == 'default' ? 'el-button--default' : 'el-button--small', props.type == 'primary' ? 'el-button--primary' : props.type == 'danger' ? 'el-button--danger' : props.type == 'warning' ? 'el-button--warning' : props.type == 'info' ? 'el-button--info' :
        props.type == 'success' ? 'el-button--success' : 'el-button--default', 
        isplain ? 'is-plain' : '',
    isCirle ? 'is-cirle' : '',
    isRound ? 'is-round' : ''
    ]">
        <icon :icon="props.icon" v-if="props.icon"></icon>
        <Loading v-if="isLoading && !props.icon"></Loading>
        <slot></slot>
        <slot name="loading"></slot>
    </button>
</template>
<script lang="ts" >
import { defineComponent, onMounted, ref,computed } from "vue";
import  { getPassProps } from "./types";
import icon from "./../../icon/src/icon.vue";
import Loading from "./../../../loading/loading.vue"

export default defineComponent({
    name: "ZButton",
    components: { icon, Loading },
    props:getPassProps,
    setup(props,{ attrs }) {
        let isplain = ref(false);
        let isCirle = ref(false);
        let isRound = ref(false);
        let isLoading = ref(false);
        
        onMounted(() => {
            console.log(attrs,"attrs")
            isplain.value = "plain" in attrs;
            isCirle.value = "cirle" in attrs;
            isRound.value = 'round' in attrs;
            isLoading.value = 'loading' in attrs;
        })

       const disabled= computed(()=>{
            return props.disabled|| "disabled" in attrs;
        })

        let _ref = ref<HTMLButtonElement>();
        let _size = ref<string | undefined>(props.size);
        let _type = ref<string | undefined>(props.type);
    
        return {
            props,
            isplain,
            isCirle,
            isRound,
            isLoading,
            ref: _ref,
            size: _size,
            type: _type,
            disabled

        }
    }
})

</script>