## Button 图标的使用

```vue
<script lang='ts' setup>
    import {ref} from "vue";
    const size=ref<string>("default");
    const type=ref<string>('primary');
</script>
<template> 
    <Button :type='type' :size='size' icon="icon-add">组件按钮</Button>
</template>
```
## 图标类型
<Button type='primary' icon='icon-add' size='default'>正常按钮</Button>
<Button type='danger' size='default'  loading  >危险按钮</Button>
<Button type='success' size='default' icon="icon-bottom">成功按钮</Button>
<Button type='warning' size='default' icon="icon-bad">警告按钮</Button>
<Button type='info' size='default' icon="icon-comment">通知按钮</Button>
<el-row>
    <Button type='default' size='default' icon="icon-direction-up">默认按钮</Button>
</el-row>


## 图标尺寸
<Button type='danger' size='small'>危险按钮</Button>
<Button type='success' size='default'>成功按钮</Button>
<Button type='warning' size='large'>警告按钮</Button>

## 图标类型是否实体空感
<Button type='primary' size='default' plain>正常按钮</Button>
<Button type='danger' plain size='default'>危险按钮</Button>
<Button type='success' plain size='default'>成功按钮</Button>
<Button type='warning' plain size='default'>警告按钮</Button>
<Button type='info' plain size='default'>通知按钮</Button>
<Button type='default' plain size='default'>默认按钮</Button>


## 圆角和半圆角按钮
<Button type='primary' size='default' round plain>正常按钮</Button>
<Button type='danger' plain size='default' round>危险按钮</Button>
<Button type='success' plain size='default' round>成功按钮</Button>
<Button type='warning' plain size='default' cirle>警告按钮</Button>
<Button type='info' plain size='default' cirle>通知按钮</Button>
<Button type='default' plain size='default' cirle>默认按钮</Button>    

## 禁用按钮
<Button type='primary' size='default'  :disabled='true'>正常按钮</Button>
<Button type='danger' plain size='default' :disabled='true'>危险按钮</Button>
<Button type='success' plain size='default' :disabled='true'>成功按钮</Button>
<Button type='warning' plain size='default' :disabled='true'>警告按钮</Button>
<Button type='info' plain size='default' :disabled='true'>通知按钮</Button>
<Button type='default' plain size='default' :disabled='true'>默认按钮</Button>    

## 属性
| mame        | 属性           |默认值  |
| ------------:|:-------------:| -----:|
| 尺寸 | size | small|
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



 