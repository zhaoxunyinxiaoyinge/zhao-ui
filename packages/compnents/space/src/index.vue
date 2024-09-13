<template>
    <div :class="className" :style="containerStyle">
        <slot>
        </slot>
    </div>
</template>

<script lang="ts">
import { isAarray, isNumber } from "@zhao/utils";
import { defineComponent, computed, CSSProperties, StyleValue, ref, watchEffect } from "vue";
import { spaceProps } from "./index"
import { renderSlot } from "vue";

const SIZE_MAP = {
    small: 8,
    default: 12,
    large: 16,
} as const


export default defineComponent({
    name: 'ElSpace',
    props: spaceProps,
    setup(props, { slots }) {


        let className = computed(() => {
            return ["el-space", "el-space--" + props.direction, props.class]
        })

        const horizontalSize = ref<string | number>(0)
        const verticalSize = ref<string | number>(0)

        const containerStyle = computed<StyleValue>((): any => {
            const wrapKls: CSSProperties =
                props.wrap || props.fill
                    ? { flexWrap: 'wrap', marginBottom: `-${verticalSize.value}px` }
                    : {}
            const alignment: CSSProperties = {
                alignItems: props.alignment,
            }
            return [wrapKls, alignment, props.style]
        })

        const itemStyle = computed<StyleValue>(() => {
            const itemBaseStyle: CSSProperties = {
                paddingBottom: `${verticalSize.value}px`,
                marginRight: `${horizontalSize.value}px`,
            }

            const fillStyle: CSSProperties = props.fill
                ? { flexGrow: 1, minWidth: `${props.fillRatio}%` }
                : {}

            return [itemBaseStyle, fillStyle]
        })

        const classes = computed(() => `${props.prefixCls || "el-space__item"}`);

        watchEffect(() => {
            const { size = 'small', wrap, direction: dir, fill } = props
            if (isAarray(size)) {
                const [h = 0, v = 0] = size
                console.log(h, v)
                horizontalSize.value = h
                verticalSize.value = v
            } else {
                let val: number;
                if (typeof size == "number" && isNumber(size)) {
                    val = size
                } else {
                    val = typeof size == "string" && SIZE_MAP[size || 'small'] || SIZE_MAP.small
                }

                if ((wrap || fill) && dir === 'horizontal') {
                    horizontalSize.value = verticalSize.value = val
                } else {
                    if (dir === 'horizontal') {
                        horizontalSize.value = val
                        verticalSize.value = 0
                    } else {
                        verticalSize.value = val
                        horizontalSize.value = 0
                    }
                }
            }
        })



        return {
            className,
            containerStyle,
            itemStyle,
            classes
        }
    }
})
</script>