
<template>
    <span class="el-link" :class="[props.type == 'primary' ? 'el-link--primary' : props.type == 'success' ? 'el-link--success' : props.type == 'warning' ? 'el-link--warning' :
        props.type == 'info' ? 'el-link--info' :props.type=='danger'?'el-link--danger': 'el-link--default',
    props.underline && !isDisabled ? 'is-underline' : '',
    isDisabled ? 'is-disabled' : ''
    ]">
        <ZIcon v-if="props.icon" :icon="props.icon"></ZIcon>
        <a v-if="props.href&&!isDisabled" :href="props.href">
            <slot></slot>
        </a>
        <slot v-else></slot>
    </span>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { getPassProps } from "./link";
import { ZIcon } from "./../../icon/index"

export default defineComponent({
    name: "Links",
    components: { ZIcon },
    props: getPassProps,
    setup(props, { attrs }) {
        const isDisabled = ref(false);
        isDisabled.value = "disabled" in attrs;
        return {
            props,
            isDisabled
        }
    }
})
</script>