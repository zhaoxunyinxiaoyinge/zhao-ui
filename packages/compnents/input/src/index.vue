<template>
  <div class="input">
    <template v-if="type !== 'textarea'">
      <div class="input__inner" :class='size == "large" ? "input__large" : size === "small" ? "input__small" : "input__default"'>
        <span class="input__inner-prepend" v-if="isEixstSlot().prepend">
          <slot name="prepend"></slot>
        </span>
        <div class="input__inner-wrap" style="position: relative;">
          <Icon :icon="prefixIcon" v-if="prefixIcon !== ''" style="position:absolute;left:10px"></Icon>
          <input ref="input" :name="name" class="input__inner-wrap-input" style="padding-left: 30px;" :type="type"
            :value="modelValue" @blur="onBlur" :placeholder="placeholder" :disabled="disabled" :readonly="readonly"
            @input="(val) => onInput(val)" />
          <Icon :icon="suffixIcon" v-if="suffixIcon !== ''" style="position:absolute;right:10px"></Icon>
        </div>
        <span class="input__inner-append" v-if="isEixstSlot().append">
          <slot name="append"></slot>
        </span>
      </div>
    </template>
    <template v-else>
      <div class="input__textarea">
        <textarea :name="name" id="textarea" @input="handleKeyUp" :placeholder="placeholder" :maxlength="maxlength"
          :rows="rows" :disabled="disabled" :readonly="readonly">
           {{ modelValue }} </textarea>
        <span v-if="showWordLimit" class="text-count">{{ textareaText.length }}/{{ maxlength }}</span>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, watch, nextTick } from "vue";
import { inputProps } from "./index";
import Icon from "@zhao/components/icon/index"

enum sizes {
  large = 'large',
  default = 'default',
  small = "small"
}

export default defineComponent({
  name: "ElInput",
  emits: ["blur", "focus", "change", "input", "clear", "update:modelValue"],
  components: { Icon },
  expose: ["onBlur", 'onFocus', 'onInput', "change"],
  props: inputProps,
  setup(props, context) {
    let input = ref<HTMLInputElement>();
    const textareaText = ref('');


    onMounted(() => {
      nextTick(() => {
        setProtypies()
      })
    })

    const onBlur = (val: Event) => {
      context.emit("change", val)
      context.emit("blur", val)
    }

    const onFocus = (val: Event) => {
      context.emit("focus", val)
    }

    const onInput = (val: any) => {
      context.emit("update:modelValue", val.target._value);
    }

    const change = (val: string) => {
      context.emit("change", val)
    }

    const setProtypies = () => {
      if (typeof props['input-style'] === 'object') {
        let arr: string[] = Object.keys(props['input-style']);
        for (let i = 0; i < arr.length; i++) {
          let name = arr[i];
          Object.assign((input as unknown as HTMLInputElement).style, (props['input-style'])[name]);
        }
      } else {
        const styleStr: CSSStyleDeclaration = (input as unknown as HTMLInputElement).style;
        let cssStr: string = '';
        for (let key in styleStr) {
          cssStr += key + ":" + styleStr[key];
        }
        if (input.value) {
          input.value.style.cssText = cssStr + props["input-style"];
        }
      }
    }

    const isEixstSlot = () => {
      let obj: { append: boolean, prepend: boolean } = {
        append: false,
        prepend: false
      };
      if (context.slots.append) {
        obj.append = true;
      }
      if (context.slots.prepend) {
        obj.prepend = true;
      }
      return obj
    }
    const handleKeyUp = (event: Event) => {
      // if (event.target && event.target.value) { textareaText.value = event.target.value.trim(); }
    }

    watch(() => props["input-style"], () => {
      setProtypies();
    })

    return {
      type: props.type,
      placeholder: props.placeholder,
      disabled: props.disabled,
      readonly: props.readonly,
      modelValue: props.modelValue,
      rows: props.rows,
      prefixIcon: props.prefixIcon,
      suffixIcon: props.suffixIcon,
      showWordLimit: props.showWordLimit,
      maxlength: props.maxlength,
      name: props.name,
      inputStype: props["input-style"],
      size: props.size,
      textareaText,

      input,

      onBlur,
      onFocus,
      onInput,
      change,
      isEixstSlot,
      handleKeyUp
    }
  }
})
</script>