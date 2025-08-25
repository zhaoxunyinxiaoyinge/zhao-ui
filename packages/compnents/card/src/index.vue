<template>
    <div :class="classes">
        <div v-if="slots.header||props.header" :class="headerClass">
            <slot name="header">{{ props.header }}</slot>
        </div>
        <div :class="bodyClass" :style="props['bodyStyle']">
            <slot >
            </slot>
        </div>
        <div  v-if="slots.footer||props.footer" :class="footerClass"  >
            <slot name="footer">{{ props.footer }}</slot>
        </div>
    </div>
</template>

<script lang="ts"  >
import {useSlots, defineComponent, computed} from "vue";
import {  CardProps} from "./types" ;
import {createNamespace} from "@zhao/utils/createBem";
export default defineComponent({
    name:"Zcard",
    props:CardProps,
    setup(props){
    let slots=useSlots();
    let nb=createNamespace("card");
    let classes=createNamespace('card').b();
    let headerClass=createNamespace("card").e("header");
    let bodyClass=createNamespace("card").e("body");
    let footerClass=createNamespace("card").e("footer")
    const  allClases=computed(()=>{
       return  props.shadow=="always"?nb.is("always-shadow",true):props.shadow=='hover'?nb.is("hover-shadow",true):""
    })
        return {
            props,
            slots,
            classes:[classes,allClases.value],
            headerClass:[headerClass,props['headerClass']],
            bodyClass:[bodyClass,props["bodyClass"]],
            footerClass:[footerClass,props["footerClass"]]
        }
    }
})

</script>