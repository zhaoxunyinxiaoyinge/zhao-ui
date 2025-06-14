<template>
    <div class="el-scroll" ref="scroll" :style="style">
        <div class="el-scroll--wrap" :class="wrapClass" :style="wrapStyle">
            <component :is="props.tag" class="el-scroll--view" :class="viewClass">
                <slot></slot>
            </component>
        </div>
    </div>
</template>

<script lang="ts" >
import { ref, defineComponent, onMounted, reactive, InjectionKey, Ref } from "vue";
import { getPassProps } from "./types";
export default defineComponent({
    name: "ScrollBar",
    props: getPassProps,
    setup(props) {
        const scroll = ref(null);
        let wrapClass = ref("");
        let viewClass = ref("");
        let wrapStyle = "";
        let viewStyle = "";

        const keys: InjectionKey<Ref<string>> = Symbol();

        const style = reactive({ height: '100%', maxHeight: "100%" });
        if (props.height) {
            typeof props.height == "string" ? style.height = props.height : style.height = props.height + 'px';
        }

        if (props.maxHeight) {
            typeof props.maxHeight == "string" ? style.maxHeight = props.maxHeight : style.maxHeight = props.maxHeight + 'px';
        }

        if (props['wrap-class']) {
            wrapClass.value = props["wrap-class"];
        }

        if (props["view-class"]) {
            viewClass.value = props["view-class"];
        }

        if (props["wrap-style"]) {
            if (typeof props["wrap-style"] == "string") {
                wrapStyle = props["wrap-style"];
            }
        }

        if (props["view-style"]) {
            if (typeof props["view-style"] == "string") {
                viewStyle = props["view-style"];
            }
        }

        onMounted(() => {
        })

        return {
            scroll,
            style,
            wrapClass,
            viewClass,
            wrapStyle,
            viewStyle,
            props
        }
    }
})

</script>