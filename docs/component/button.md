---
layout: doc
sidebar: true
aside: true
lastUpdated: 1729432579233
---

## Button 图标的使用
```vue
<script lang='ts' setup>
    import {ref} from "vue";
    const size=ref<string>("default");
    const type=ref<string>('primary');
</script>
<template> 
    <z-button :type='type' :size='size' icon="edit">组件按钮</z-button>
</template>
```
## 图标类型
<z-button  type='primary'  icon='edit' size='default'>正常按钮</z-button>
<z-button type='danger' size='default'  loading  >危险按钮</z-button>
<z-button type='success' size='default' icon="icon-bottom">成功按钮</z-button>
<z-button type='warning' size='default' icon="icon-bad">警告按钮</z-button>
<z-button type='info' size='default' icon="icon-comment">通知按钮</z-button>

<div style="margin:20px 0">
    <z-button type='default' size='default' icon="icon-icon-test3">默认按钮</z-button>
</div>



## 图标尺寸
```vue
<script lang='ts' setup>
    import {ref} from "vue";
    const size=ref<string>("default");
</script>
<template> 
    <z-button type="primary" :size='size' icon="icon-add">组件按钮</z-button>
    <z-button type='danger' size='small'>危险按钮</z-button>
    <z-button type='success' size='default'>成功按钮</z-button>
    <z-button type='warning' size='large'>警告按钮</z-button>
</template>
```
<z-button type='danger' size='small' icon="icon-add">危险按钮</z-button>
<z-button type='success' size='default'>成功按钮</z-button>
<z-button type='warning' size='large'>警告按钮</z-button>

## 图标类型是否实体空感
```vue
<script lang='ts' setup>
</script>
<template> 
    <z-button type="primary"  plain icon="icon-icon-test">组件按钮</z-button>
    <z-button type='danger'  plain>危险按钮</z-button>
    <z-button type='success' plain >成功按钮</z-button>
    <z-button type='warning'  plain>警告按钮</z-button>
</template>
```
<z-button type='primary' size='default' plain icon="icon-add">正常按钮</z-button>
<z-button type='danger' plain size='default'>危险按钮</z-button>
<z-button type='success' plain size='default'>成功按钮</z-button>
<z-button type='warning' plain size='default'>警告按钮</z-button>
<z-button type='info' plain size='default'>通知按钮</z-button>
<z-button type='default' plain size='default'>默认按钮</z-button>


## 圆角和半圆角按钮
```vue
<script lang='ts' setup>
</script>
<template> 
    <z-button type="primary"  plain icon="icon-add" round>组件按钮</z-button>
    <z-button type='danger'  plain cirle>危险按钮</z-button>
    <z-button type='success' plain  round>成功按钮</z-button>
    <z-button type='warning'  plain cirle>警告按钮</z-button>
</template>
```
<z-button type='primary' size='default' round plain>正常按钮</z-button>
<z-button type='danger' plain size='default' round>危险按钮</z-button>
<z-button type='success' plain size='default' round>成功按钮</z-button>
<z-button type='warning' plain size='default' cirle>警告按钮</z-button>
<z-button type='info' plain size='default' cirle>通知按钮fdfdfffd</z-button>
<z-button type='default' plain size='default' cirle>默认按钮</z-button>    

## 禁用按钮
```vue
<script lang='ts' setup>
</script>
<template> 
    <z-button type="primary"  disabled plain icon="icon-add" round>
        组件按钮</z-button>
    <z-button type='danger' disabled  plain cirle>危险按钮</z-button>
    <z-button type='success' disabled plain  round>成功按钮</z-button>
    <z-button type='warning'  disabled plain cirle>警告按钮</z-button>
</template>
```
<z-button type='primary' size='default'  :disabled='true'>正常按钮</z-button>
<z-button type='danger' plain size='default' :disabled='true'>危险按钮</z-button>
<z-button type='success' plain size='default' :disabled='true'>成功按钮</z-button>
<z-button type='warning' plain size='default' :disabled='true'>警告按钮</z-button>
<z-button type='info' plain size='default' :disabled='true'>通知按钮</z-button>
<z-button type='default' plain size='default' :disabled='true'>默认按钮</z-button>    

## 自定义标签按钮
``` vue 
    <script lang='ts' setup>
</script>
<template> 
    <z-button type="primary" tag='div'  disabled plain icon="icon-add" round>组件按钮</z-button>
    <z-button type='danger' tag='a' disabled  plain cirle>危险按钮</z-button>
    <z-button type='success' tag='button' disabled plain  round>成功按钮</z-button>
    <z-button type='warning' tag='div'  disabled plain cirle>警告按钮</z-button>
</template>

```
 <z-button type="primary" tag='div'  disabled  >
        组件按钮</z-button>
    <z-button type='danger' tag='a'  href='http//:www.baidu.com' target='blank' >危险按钮</z-button>
    <z-button type='success' tag='button' disabled >成功按钮</z-button>
    <z-button type='warning' tag='div'  disabled  >警告按钮</z-button>

## 属性
| mame        | 属性           |默认值  |
| ------------:|:-------------:| -----:|
 尺寸 | size | small
| 类型 | type     | default |
| 是否空白 | plain |false |
| 圆角   | cirle  | false|
| 半圆角 | round |false|
|禁用 |disabled| false|


## 方法 

| 属性名    |默认值  |
| ------------| -----|
|ref| 获取当前的元素|
|size| 获取当前按钮的尺寸|
|type| 获取当前按钮的类型|
|disabeld| 获取当前按钮是否禁用|



 