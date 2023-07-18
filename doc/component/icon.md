## Icon 图标的使用

```vue
<script lang='ts' setup>
    import {ref} from "vue";
    const color=ref<string>('#000');
    const size=ref<number>(23)
</script>
<template> 
   <ZIcon class="infont  z-icon-file-delete" :color="color" :size="size">图标删除</ZIcon>
</template>
```
<ZIcon icon="icon-add">添加</ZIcon>
<br/>
<ZIcon icon="icon-ashbin">删除</ZIcon>

::: danger
这是自定义组件,功能不全，暂不能在全局环境中使用
:::

## 属性
| mame        | 属性           | 值  |
| ------------:|:-------------:| -----:|
| 图标名称 | icon     |  字符串 |