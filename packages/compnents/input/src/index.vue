<script lang="ts">
import { defineComponent, ref, onMounted, computed, watch, nextTick } from "vue";
import { inputProps } from "./types";
import { createNamespace } from "@zhao/utils"
import { ZIcon } from "./../../icon/index"

export default defineComponent({
  name: "ZInput",
  props: inputProps,
  components: { ZIcon },
  emits: {
    'update:modelValue'(val: string) {
          return true
    }
  },
  setup(props, { slots, emit }) {
    //监听值的变化，

    const model = ref(false);

    const hasPrendSolts = ref(false);
    const hasAppendSlots = ref(false);
    const hasSuffixIcon = ref(false);
    const nb = createNamespace("input");
    const sb = createNamespace("textarea");
    const input = ref(null);
    const textarea = ref<HTMLTextAreaElement | null>(null);
    let isClearable = ref(false);
    let isPassword = ref(false);

    onMounted(() => {
      hasPrendSolts.value = slots.prepend ? true : false;
      hasAppendSlots.value = slots.append ? true : false;
      if (hasPrendSolts.value) {
        classList.value.containerClass.push("el-input-group", "el-input-group--prepend");
      }
      if (hasAppendSlots.value) {
        classList.value.containerClass.push("el-input-group", "el-input-group--append")
      }

      hasSuffixIcon.value = slots.suffix ? true : false;

      nextTick(() => {
        if (props.autosize || typeof props.autosize === 'object') {
          const { height, minHeight } = getTextareaHeight(props.autosize);
          setTextarea(minHeight, height);
        }
      })
    })
    const classList = ref({
      containerClass: [nb.b()],
      prendClass: [nb.be("group", "prepend")],
      prefixClass: [nb.e("prefix")],
      prefixInnerClass: [nb.e("prefix-inner")],
      wrapperClass: [nb.e("wrapper")],
      inputClass: [nb.e("inner")],
      appendClass: [nb.be("group", "append")],
      suffixClass: [nb.e("suffix")],
      suffixInerClass: [nb.e("suffix-inner")],
      textareaContainer: [sb.b()],
      textareaInnerClass: [sb.e("inner")]
    })

    const delteClass = (classList, classContainer, name) => {
      let index = classList.value[classContainer]?.findIndex(item => item === name);
      if (index != -1) {
        classList.value[classContainer].splice(index, 1);
      }
    }

    const addClass = (classList, classContainer, name) => {
      classList.value[classContainer]?.push(name);
    }

    const containerClassComputer = computed(() => {
      props.disabled ? addClass(classList, "containerClass", "is-disabled") : delteClass(classList, "containerClass", "is-disabled");
      return classList.value["containerClass"];
    })

    //提供对尺寸大小的控制，large,small
     const getInputSize=computed(()=>{
      return props.size=="small"?nb.m('small'):props.size=='large'?nb.m("large"):""
     })

    // prefix solt是否存在

    const hasPrefixWapper = computed(() => {
      return props.prefixIcon || hasPrefixIcon.value;
    })

    // 必须达到，1.有值，2.clearable 3 当前聚焦触发
    const hasClearable = computed(() => {
      return props.clearable && isClearable.value && props.modelValue != "";
    })

    // 设置文本框的类型

    const getInputType = computed(() => {
      return props.showPassWord && isPassword.value ? "password" : props.type == "text" ? 'text' : props.type == 'textarea' ? 'textarea' : 'text'
    })

    // 插槽和cleareabel，password, 显示该元素
    const showSuffixWrapper = computed(() => {
      return hasClearable.value || props.showPassWord || props.suffixIcon || slots.suffix||props.showWordLimit;
    })

    const showComputedCount=computed(()=>{
        return (props.type=='text'||props.type=="textarea")&&!props.showPassWord&&props.showWordLimit;
    })

    // 判断前置内容是否是插槽还是通过属性传递的
    const hasPrefixIcon = computed(() => {
      return slots.prefix ? true : false;
    })

    // autosize 可以通过布尔值，来传递不同的值，比如，对象和布尔
    const getAautsize = computed(() => {
      if (props.autosize === true) {
        return {
          rows: 2
        }
      }
    })

    //设置字体的个数
    const getMinlength=computed(()=>{
        return typeof props.minlength=="number"?props.minlength:typeof props.minlength=='string'?parseInt(props.minlength,10):0;
    })


   const getMaxlength=computed(()=>{
        return typeof props.maxlength=="number"?props.maxlength:typeof props.maxlength=='string'?parseInt(props.maxlength,10):524288;
    })

    const handleFocus = (className = 'wrapperClass') => {
      addClass(classList, className, "is-focus");
      isClearable.value = true;
    }

    const handleBlur = (className = 'wrapperClass') => {
      delteClass(classList, className, "is-focus");
      isClearable.value = false;
    }

    const handleClearable = () => {
      console.log("执行了，事件")
      if (input.value !== null) {
        (input.value as HTMLInputElement).focus();
      }
      if (props.modelValue) {
        emit("update:modelValue", "");
      } else {
      }
    }

    const handleMouseEnter = () => {
      isClearable.value = true;
    }

    const handleMouseLeave = () => {
      if (input.value !== null) {
        if (document.activeElement == input.value as HTMLInputElement) {
          isClearable.value = true;
        } else {
          isClearable.value = false;
        }
      }
    }



    const handlePassword = (val) => {
      isPassword.value = val;
    }

    // 创建一个隐藏元素绝对定位，用来获取texarea文字的高度，然后移除,监听，内容区域的变化，动态设置，tearea的高度
    //计算动态高度，设置到容器上面
    const getTextareaHeight = (autosize: boolean | { maxRows?: number, minRows?: number }) => {
      const div = document.createElement("div");
      const style = window.getComputedStyle((textarea.value) as HTMLTextAreaElement);
      div.style.width = style.width;
      div.style.lineHeight = style.lineHeight;
      div.style.minHeight = parseInt(style.minHeight) ? style.minHeight : style.height;
      div.style.fontSize = style.fontSize;
      div.style.wordBreak = "word-break";
      div.style.whiteSpace = "wrap";
      div.style.position = "absolute";
      div.style.zIndex = "-1000";
      div.style.top = "-1000px";
      div.style.visibility = 'hidden';
      div.style.padding = style.padding;
      div.style.boxSizing = style.boxSizing;
      document.body.appendChild(div);
      div.textContent = props.modelValue as string;

      //获取内容的高度的高度，计算最小高度和最大高度
      let height = div.scrollHeight;
      let minHeight = autosize == true ? (parseInt(div.style.minHeight, 10) || 0) : typeof autosize == 'object' ? getMinHeight(autosize, height) : 0;
      let maxHeight = autosize == true ? (parseInt(style.maxHeight, 10) || Infinity) : typeof autosize == "object" ? getMaxHeight(autosize.minRows = 1, autosize.maxRows = 1, height) : Infinity
      document.body.removeChild(div);
      return {
        minHeight,
        height: Math.max(minHeight, Math.min(height, maxHeight))
      }
    }
    const setTextarea = (minHeight, height) => {
      if (textarea.value !== null) {
        textarea.value.style.height = height + "px";
        if (minHeight != 0) {
          textarea.value.style.minHeight = minHeight + "px"
        }
      }
    }

    //设置边界条件，防止传入负数和最大行小于最小行
    const getMaxHeight = (minRows: number, maxRows: number, currentHeight: number) => {
      if (minRows <= 0) { minRows = 1 };
      if (maxRows <= 0 || maxRows < minRows) { maxRows = minRows };
      return (currentHeight - 10) * maxRows + 10;
    }

    const getMinHeight = (autosize, minHeight) => {
      return autosize.minRows && autosize.minRows > 0 ? autosize.minRows * (minHeight - 10) + 10 : minHeight;
    }
    
    const handleGetEtargetVal=(event)=>{
        emit('update:modelValue',event.target?.value);
    }

    const handleTextLength=(modelValue:string|number)=>{
      return  typeof modelValue==='string'? modelValue.length:0;
    }

    watch(() => props.modelValue, (next, old) => {
      if (props.type === 'textarea' && props.autosize) {
        nextTick(() => {
          const { height } = getTextareaHeight(props.autosize);
          setTextarea(0, height);
        })
      }
    })

    return {
      hasPrendSolts,
      hasAppendSlots,
      hasPrefixWapper,
      classList,
      containerClassComputer,
      props,
      handleFocus,
      handleBlur,
      handleClearable,
      emit,
      input,
      textarea,
      isPassword,

      model,
      hasClearable,
      handleMouseEnter,
      handleMouseLeave,
      getInputType,
      handlePassword,
      hasSuffixIcon,
      showSuffixWrapper,
      hasPrefixIcon,
      getInputSize,
      getMinlength,
      getMaxlength,
      showComputedCount,
      nb,
      sb,
      handleGetEtargetVal,
      handleTextLength
    }
  }
});
</script>

<template>
  <!-- 最外层容器 -->
  <div :class="[containerClassComputer,getInputSize]" v-if="props.type !== 'textarea'" v-bind="$attrs">
    <!-- 设置前层插入插槽 -->
    <div :class="classList.prendClass" v-if="hasPrendSolts">
      <slot name="prepend"></slot>
    </div>
    <!-- 容器包裹层 -->
    <div :class="classList.wrapperClass" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">

      <!-- 前置输入，prefix -->
      <span :class="classList.prefixClass" v-if="hasPrefixWapper">
        <span :class="classList.prefixInnerClass">
          <z-icon :icon="props.prefixIcon" v-if="!hasPrefixIcon && props.prefixIcon" class="icon__prefix-icon"></z-icon>
          <slot name="prefix" v-if="hasPrefixIcon"></slot>
        </span>
      </span>

      <input ref="input" :value="props.modelValue"
        :minlength="getMinlength"
        :maxlength="getMaxlength"
        @input="handleGetEtargetVal" :type="getInputType"
        :placeholder="props.placeholder ? props.placeholder : ''" :disabled="props.disabled ? true : false"
        :class="classList.inputClass" @blur="() => { handleBlur() }" @focus="() => { handleFocus() }"></input>
      <!--suffix -->
      <!-- 文本框清除逻辑，1.必须有值，不能为空，2，获取焦点，失去焦点，隐藏图标，3，鼠标进入和离开隐藏图标，4，聚焦鼠标离开，不隐藏图标5.点击清除按钮清除内容，并获取焦点 -->
      <span :class="classList.suffixClass" v-if="showSuffixWrapper">
        <span :class="classList.suffixInerClass">
          <!-- 这里提供对showworldlimit的支持，可以显示当前输入的字符,显示条件，必须，showwordlimt为真， -->
          <span :class="[nb.e('count')]" v-if="showComputedCount"> 
            <span :class="[nb.e('count-inner')]">{{ handleTextLength(props.modelValue)}}/{{ getMaxlength }}</span>
          </span>  

          <!-- suffix-solt -->
          <slot name="suffix" v-if="hasSuffixIcon"></slot>
          <!-- 是否传递了，:prefix-icon 属性,如果有suffix插槽和icon 那么优先选插槽 -->
          <z-icon :icon="props.suffixIcon" v-if="!hasSuffixIcon && props.suffixIcon"></z-icon>

          <!-- 密码框，显示逻辑，1，通过，show-password 控制变量，显示，眼睛逻辑图标和非眼睛图标，2 密码和文本框间进行切换3，默认密码框图标一值显示-->
          <i class="el-icon el-input__icon el-input__clear" @click.stop="handleClearable" v-if="hasClearable">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path fill="currentColor"
                d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z">
              </path>
              <path fill="currentColor"
                d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896">
              </path>
            </svg>
          </i>

          <!-- 密码显示和关闭 -->
          <i class="el-icon el-input__icon el-input__password" @click="() => handlePassword(true)"
            v-if="!isPassword && props.showPassWord && props.modelValue != ''"><svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024">
              <path fill="currentColor"
                d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z">
              </path>
              <path fill="currentColor"
                d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z">
              </path>
            </svg>
          </i>
          <i class="el-icon el-input__icon el-input__password" @click="() => handlePassword(false)"
            v-if="isPassword && props.showPassWord && props.modelValue != ''"><svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024">
              <path fill="currentColor"
                d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160">
              </path>
            </svg>
          </i>
        </span>
      </span>
    </div>
    <!-- 设置后层层插入插槽 -->
    <div :class="classList.appendClass" v-if="hasAppendSlots">
      <slot name="append"></slot>
    </div>
  </div>
  <div v-if="props.type == 'textarea'" v-bind="$attrs" :class="classList.textareaContainer">
    <textarea ref="textarea" :class="classList.textareaInnerClass" :value="props.modelValue"
      :minlength="getMinlength"
      :maxlength="getMaxlength"
      @input="handleGetEtargetVal"
      @focus="() => { handleFocus('textareaInnerClass') }" @blur="() => { handleBlur('textareaInnerClass') }" autocomplete="off"
      :rows="props.rows" :placeholder="props.placeholder"></textarea>
      <span v-if="showComputedCount" :class="[sb.e('count')]">{{ handleTextLength(props.modelValue) }}/ {{getMaxlength }}</span>
  </div>
</template>