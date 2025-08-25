<template>
    <component :is="props.tag" ref="_ref" :disabled="props.tag==='button'?props.disabled:'undefined'"
    :aria-disabled="props.tag !== 'button' ? props.disabled : undefined"
     :tabindex="props.tag !== 'button' && props.disabled ? -1 : undefined"
     @click="onClick"
    class="el-button" :class="[size == 'large' ? 'el-button--large' :size == 'small' ? 'el-button--small' : 'el-button--medium', props.type == 'primary' ? 'el-button--primary' : props.type == 'danger' ? 'el-button--danger' : props.type == 'warning' ? 'el-button--warning' : props.type == 'info' ? 'el-button--info' :
        props.type == 'success' ? 'el-button--success' : 'el-button--default', 
        isplain ? 'is-plain' : '',
    isCirle ? 'is-cirle' : '',
    isRound ? 'is-round' : '',
    props.disabled?'is-disabled':''
    ]">
        <icon :icon="props.icon" v-if="props.icon"></icon>
        <Loading class="loading" v-if="isLoading && !props.icon"></Loading>
        <slot></slot>
        <slot name="loading"></slot>
    </component>
</template>
<script lang="ts" >
import { defineComponent, onMounted, ref,computed, inject,Ref } from "vue";
import  { getPassProps } from "./types";
import icon from "./../../icon/src/icon.vue";
import Loading from "./../../../loading/loading.vue"
import {configKey, GlobalConfig,InjectionConfig, globalconfig } from "@zhao/utils/tokens"

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
            isplain.value = "plain" in attrs;
            isCirle.value = "cirle" in attrs;
            isRound.value = 'round' in attrs;
            isLoading.value = 'loading' in attrs;
        })

       const disabled= computed(()=>{
            return props.disabled|| "disabled" in attrs;
        })

        //按钮组的优先级大于内部按钮的优先级大于配置的的按钮的优先级，大于默认的按钮优先级,同时,===》涉及到组件的默认属性和传入的属性的区分===》
        // 判断逻辑获取组件内部的属性是否是传入的，还是默认的，检查组件属性定义是否正确
        // button组件接受的来源有，全部注册出传入，配置包裹传入，configtProvide,再判断是否本地属性
        // 全局传入和包裹传入会提供不同的InjectKey进行区分，也就是判断，配置包裹有没有，没有，再走全局，有不用走全局
        // 直接使用计算属性的合并最终结果
        let configProvideInject=inject<Ref<InjectionConfig>>(configKey);

        const group=inject<{size?: string,type?: string}>('buttonGroup',{});
        let _ref = ref<HTMLButtonElement>();

        let _size = ref<string | undefined>(group.size?group.size:props.size!="default"?props.size:configProvideInject?.value.size);
        console.log(_size,888)
        let _type = ref<string | undefined>(group?.type??props.type);

        // 如果不是button标签，设置disabled属性,那么一般要阻止默认事件的发生
        const onClick=(event:MouseEvent)=>{
            if(props.tag!== 'button'&&disabled.value){
                event.preventDefault();
                event.stopPropagation?.();
                return;
            }
        }
    
        return {
            props,
            isplain,
            isCirle,
            isRound,
            isLoading,
            ref: _ref,
            size: _size,
            type: _type,
            disabled,
            onClick

        }
    }
})

</script>