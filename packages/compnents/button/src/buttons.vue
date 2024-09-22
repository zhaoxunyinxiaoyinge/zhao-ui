<template>
    <button ref="_ref" :disabled="isDisabled" class="el-button" :class="[props.size == 'large' ? 'el-button--large' : props.size == 'default' ? 'el-button--default' : 'el-button--small', props.type == 'primary' ? 'el-button--primary' : props.type == 'danger' ? 'el-button--danger' : props.type == 'warning' ? 'el-button--warning' : props.type == 'info' ? 'el-button--info' :
        props.type == 'success' ? 'el-button--success' : 'el-button--default', 
        isplain ? 'is-plain' : '',
    isCirle ? 'is-cirle' : '',
    isRound ? 'is-round' : ''
    ]">
        <z-icon :icon="props.icon" v-if="props.icon"></z-icon>
        <Loading v-if="isLoading && !props.icon"></Loading>
        <slot></slot>
        <slot name="loading"></slot>
    </button>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getPassProps } from "./index";
import { ZIcon } from "./../../icon/index";
import Loading from "./../../../loading/loading.vue"

export default defineComponent({
    name: "Button",
    components: { ZIcon, Loading },
    props: getPassProps,
    setup(props, { attrs }) {
        let isplain = ref(false);
        let isCirle = ref(false);
        let isRound = ref(false);
        let isDisabled = ref(false);
        let isLoading = ref(false);
        onMounted(() => {
            isplain.value = "plain" in attrs;
            isCirle.value = "cirle" in attrs;
            isRound.value = 'round' in attrs;
            isDisabled.value = "disabled" in attrs;
            isLoading.value = 'loading' in attrs;
        })

        let _ref = ref<HTMLButtonElement>();
        let _size = ref<string | undefined>(props.size);
        let _type = ref<string | undefined>(props.type);
        let _disabled = ref<Boolean>("disabled" in attrs);
        return {
            props,
            isplain,
            isCirle,
            isRound,
            isDisabled,
            isLoading,
            ref: _ref,
            size: _size,
            type: _type,
            disabeld: _disabled

        }
    }
})

</script>