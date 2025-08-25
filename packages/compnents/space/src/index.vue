<template>
    <div :class="className" :style="containerStyle">
        <template v-for="(item, index) in validchild">
            <div :class="[spaceItemClassModifier]" :style="{'flex-basis':fillChecked  ? getFillVal: 'atuo'}">
                <component :is="item" :key="index"></component> 
            </div>
            <div v-if="props.separator && index < validchild.length - 1" class="el-space__separator">
                <!-- 这里使用具名插槽和默认插槽的方式来实现分隔符 -->
                <slot name="separator">{{ props.separator }}</slot>
            </div>
        </template>
       
    </div>
</template>

<script lang="ts">

// elSpace组件的设置
//支持间距 gap 设置每一个子元素的间距
//使用插槽的方式获取所有子元素数组，并且，每一个子元素都添加一个类名 el-space__item,推荐用具名插槽
//属性flexDirction 支持两种方式，横向和垂直，默认猜猜是父级元素的开启弹性布局,使用弹性布局的flex-direction属性来控制子元素的排列方式
// size 属性其实对用的是gap的数字化，可以定义预设值，同时支持数字
// 自动换行其实就是flex-wrap: wrap; 这个属性在横向主抽上作用
//行间分隔符的原理，其实就是在小于子元素的后面插入分隔符，solt形式更通用
//子元素的对齐方式其实就是 alignment 属性其实就是flexbox的align-items属性，默认是center
// fill 属性其实就是flex-grow: 1; 这个属性，表示子元素的宽度会自动填充剩余空间
// fillRatio 属性其实就是flex-basis: 0; 这个属性，表示子元素的宽度会自动填充剩余空间的比例
// prefixCls 属性其实就是给每一个子元素添加一个类名，默认是el

import { isAarray, isNumber } from "@zhao/utils";
import { defineComponent, computed, CSSProperties,ref } from "vue";
import { spaceProps } from "./types"
import { useSlots } from "vue";

const SIZE_MAP = {
    small: 8,
    default: 12,
    large: 16,
} as const


export default defineComponent({
    name: 'ElSpace',
    props: spaceProps,
    setup(props) {
        const validchild = ref<any>([]);

        let className = computed(() => {
            return ["el-space", "el-space--" + props.direction, props.class]
        })
        const slot = useSlots();
        const validChildren = computed(() => {
            return slot.default ? slot.default() : [];

        })

        // 对插槽的内容进行筛选，过滤掉空的子元素
        validchild.value = validChildren.value.filter((item) => {
            return item.type !== 'text' && item.type !== 'comment' && item.type !== 'fragment';
        });

        //样式的设置
        const containerStyle = computed((): CSSProperties => {
            const style: CSSProperties = {};
            if (props.size) {
                //如果是数字可以直接设置gap
                if (typeof props.size == "number") {
                    style.gap = `${props.size}px`;
                } else if (isAarray(props.size)) {
                    style.rowGap = `${props.size[0]}px`;
                    style.columnGap = `${props.size[1]}px`;
                }
            } else {
                style.gap = `${SIZE_MAP[props.size] || SIZE_MAP.default}px`;
            };

            if (props.direction === 'horizontal') {
                style.flexDirection = 'row';
            } else {
                style.flexDirection = 'column';
            }

            if (props.wrap) {
                style.flexWrap = 'wrap';
            }

            if (props.style) {
                Object.assign(style, props.style);
            }

            if (props.alignment) {
                style.alignItems = props.alignment;
            } else {
                style.alignItems = 'center';
            }

            return style;
        })

        const spaceItemClassModifier = computed(() => {
            return props.prefixCls ? props.prefixCls + "__item" : "el-space__item"
        })

        const fillChecked=computed(()=>{
            if (props.fill && props.fillRatio) {
                console.warn("fill和fillRatio不能同时使用，请选择其中一个");
                return false;
            }
            return props.fill || props.fillRatio ? true : false;
        })

        const getFillVal=computed(()=>props.fillRatio? props.fillRatio * 100+"%" : props.fill?"100%":"auto");

        return {
            className,
            validChildren,
            spaceItemClassModifier,
            validchild,
            containerStyle,
            props,
            fillChecked,
            getFillVal
        }
    }
})
</script>