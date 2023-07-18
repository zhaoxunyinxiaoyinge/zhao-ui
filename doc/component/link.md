## Link组件的使用

```vue
<script lang='ts' setup>
    import {ref} from "vue";
</script>
<template> 
   <Links type='primary' href="http://www.baidu.com">通知</Links>
</template>
```

### 常用链接提示
<Links type="success">成功</Links>
<Links type='danger'>危险</Links>
<Links type='primary'>通知</Links>
<Links type='warning' href="http://www.baidu.com">警告</Links>
<Links type='info'>通知</Links>
<Links type='success' icon="icon-bad" :underline="false">通知</Links>

### 禁用文字提示
<Links type='info' disabled>禁用</Links>
<Links type='success' disabled  icon="icon-bad" :underline="false">禁用图标</Links>
<Links type="success" disabled>成功</Links>
<Links type='danger' disabled>危险</Links>
<Links type='primary' disabled>通知</Links>
<Links type='warning' disabled href="http://www.baidu.com">警告</Links>
<Links type='info' disabled>通知</Links>
<Links type='success' icon="icon-bad" :underline="false" disabled>通知</Links>

## 属性
| name        | 属性           | 值  |
| ------------:|:-------------:| -----:|
| 链接类型 | type     |  字符串 |
| 链接地址 | href | 字符串|
| 下划线  | underline| true|
| 图标   |  icon| 图标名称  |