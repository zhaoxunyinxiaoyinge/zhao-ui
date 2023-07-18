<template>
    <div :class="classes" class="is-always-shadow">
        <div v-if="slots.header || header" class="el-card__header">
            <slot name="header">{{ header }}</slot>
        </div>
        <div class="el-card__body" :style="bodyStyle">
            <slot name="body" >
                {{ body }}
            </slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, CSSProperties, StyleValue } from "vue";
import { cardProps } from "./index"
export default defineComponent({
    name: "ElCard",
    props: cardProps,
    setup(props, { slots }) {
        let classes = computed(() => {
            return ["el-card", `${props.shadow}-shadow`]
        })

        const header = slots.header;
        const body=slots.body;

        const bodyStyle = computed<StyleValue>(() => {
            const style: CSSProperties = { ...props.bodyStyle };
            return [style]
        })

        return {
            classes,
            slots,
            header,
            bodyStyle,
            body
        }
    }
})
</script>