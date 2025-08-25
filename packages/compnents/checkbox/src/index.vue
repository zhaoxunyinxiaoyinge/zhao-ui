<script setup lang="ts">
// checkbox封装思路
/**1.分为checkbox和checkbox-group两部分===》单个选择框===》创建选择框
 * 2.checkbox默认值为true和false
 * 3 支持禁用状态
 * 4.checkbox 组件支持中间状态
 * 5。按钮组支持范围选取
 * 6. 支持按钮样式可以边框样式
 */

//新增逻辑，min和max逻辑，实现思路
/***
 * 1.如果选中的个数，如果时等于最大数，那么，剩下的选择框就必须禁用，如果当前的选择数，等于最小实则框那么，当选择的框等于最小数时，立马将选择框给禁用，其他都是可以选择的
 * 2.提供min和max两个属性，分别表示最小和最大选择个数
 * 3.当选中的个数达到最大值时，禁用其他未选中的checkbox
 * 4.当选中的个数达到最小值时，禁用已选中的checkbox
 */

import { createNamespace } from "@zhao/utils";
import { checkboxgroupConfig } from "@zhao/utils/tokens";
import { computed, ref, inject } from "vue";
const nb = createNamespace("check-box");
const checkboxClass = nb.b();
const checkboxInputClass = nb.e("input");
const checkboxLabelClass = nb.e("label");
const fathermodel = inject(checkboxgroupConfig, null);

type ModelValueType = boolean | number | string;
const props = defineProps<{
  disabled: boolean,
  indeterminate: boolean,
  name: string,
  value: string,
  border: boolean,
  size: string,
  checked: boolean,
  label: string
}>();

const model = defineModel<ModelValueType>(
);

const getCheckboxValue = computed(() => {
  return model.value;
})

//修改内部属性的改变
const getCheckboxState = computed(() => {
  return {
    checked: props.checked || (typeof getCheckboxValue.value === "boolean" ? getCheckboxValue.value : (getCheckboxValue.value === (props.label ?? props.value))),
    indeterminate: props.indeterminate,
    disabled: props.disabled
  }
})



// 抽取函数，跟新选择框是否选择的状态、
const updateCheckboxState = computed(() => {
  if (fathermodel?.modelValue != null) {
    let arr = fathermodel.modelValue.value as Array<string | number | boolean>;
    if (Array.isArray(arr)) {
      return arr.includes(props.value ?? props.label);
    }
    return false;
  } else {
    return getCheckboxState.value.checked && !checkboxprops.value.indeterminate;
  }
});

//组件内部维护和一个响应式对象将传过来的属性
const checkboxprops = ref({
  checked: getCheckboxState.value.checked,
  indeterminate: getCheckboxState.value.indeterminate,
  disabled: getCheckboxState.value.disabled
})

// 对禁用逻辑进行抽取
const getMustCheckboxIsDisabled = computed(() => {
  if (fathermodel == null) {
    return checkboxprops.value.disabled;
  } else {
    const modelValue = fathermodel.modelValue?.value as Array<string | number | boolean>;
    const min = fathermodel.min?.value;
    const max = fathermodel.max?.value;
    if (Array.isArray(modelValue)) {
      if (max != null && modelValue.length >= max) {
        return !modelValue.includes(props.value ?? props.label);
      }
      if (min != null && modelValue.length <= min) {
        return modelValue.includes(props.value ?? props.label);
      }
      return checkboxprops.value.disabled;
    }
    return checkboxprops.value.disabled;
  }
})


const emits = defineEmits<{
  (e: "change", value: ModelValueType): void
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const isChecked = target.checked;
  console.log(isChecked, "isckecked");
  let value: ModelValueType;
  if (isChecked) {
    if (fathermodel?.modelValue != null && fathermodel.modelValue.value) {
      (fathermodel.modelValue.value as Array<string | number | boolean>).push(props.value ?? props.label);
    }
    value = props.value ?? true;
  } else {
    if (fathermodel?.modelValue != null && fathermodel.modelValue.value) {
      const index = (fathermodel.modelValue.value as Array<string | number | boolean>).indexOf(props.value ?? props.label);
      if (index > -1) {
        (fathermodel.modelValue.value as Array<string | number | boolean>).splice(index, 1);
      }
    }
    value = props.value ? "" : false;
  }

  // 派发事件
  emits("change", value);
  // 触发更新
  model.value = value;
  checkboxprops.value.checked = isChecked;
  checkboxprops.value.indeterminate = false;
}

</script>
<template>
  <label
    :class="[checkboxClass, { 'is-checked': updateCheckboxState }, { 'is-disabled': getMustCheckboxIsDisabled }, { 'is-border': props.border }]">
    <span
      :class="[checkboxInputClass, { 'is-checked': updateCheckboxState }, { 'is-disabled': getMustCheckboxIsDisabled }, { 'is-indeterminate': checkboxprops.indeterminate }]">
      <input type="checkbox" :value="props.value" :disabled="props.disabled || getMustCheckboxIsDisabled" @change="handleChange"
        :checked="updateCheckboxState" :name="props.name"></input>
    </span>
    <span :class="[checkboxLabelClass]">
      <slot>{{ props.value || props.label }}</slot>
      <span class="nb__icon"></span>
    </span>
  </label>
</template>