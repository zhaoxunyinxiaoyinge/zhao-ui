## Link组件的使用

```vue
<script lang='ts' setup>
    import {ref} from "vue";
</script>
<template> 
<z-link  type="success">成功</z-link>
<z-link type='danger'>危险</z-link>
<z-link type='primary'>通知</z-link>
<z-link type='warning' href="http://www.baidu.com">警告</z-link>
<z-link type='info'>通知</z-link>
<z-link type='success' icon="icon-bad" :underline="false">通知</z-link>W
</template>
```

### 常用链接提示
<z-link  type="success">成功</z-link>
<z-link type='danger'>危险</z-link>
<z-link type='primary'>通知</z-link>
<z-link type='warning' href="http://www.baidu.com">警告</z-link>
<z-link type='info'>通知</z-link>
<z-link type='success' icon="icon-bad" :underline="false">通知</z-link>

```vue
<template> 
<z-link type='info' disabled>禁用</z-link>
<z-link type='success' disabled  icon="icon-bad" :underline="false">禁用图标</z-link>
<z-link type="success" disabled>成功</z-link>
<z-link type='danger' disabled>危险</z-link>
<z-link type='primary' disabled>通知</z-link>
<z-link type='warning' disabled href="http://www.baidu.com">警告</z-link>
<z-link type='info' disabled>通知</z-link>
<z-link type='success' icon="icon-bad" :underline="false" disabled>通知</z-link>
</template>
```

### 禁用文字提示
<z-link type='info' disabled>禁用</z-link>
<z-link type='success' disabled  icon="icon-bad" :underline="false">禁用图标</z-link>
<z-link type="success" disabled>成功</z-link>
<z-link type='danger' disabled>危险</z-link>
<z-link type='primary' disabled>通知</z-link>
<z-link type='warning' disabled href="http://www.baidu.com">警告</z-link>
<z-link type='info' disabled>通知</z-link>
<z-link type='success' icon="icon-bad" :underline="false" disabled>通知</z-link>

## 属性
| name        | 属性           | 值  |
| ------------:|:-------------:| -----:|
| 链接类型 | type     |  字符串 |
| 链接地址 | href | 字符串|
| 下划线  | underline| true|
| 图标   |  icon| 图标名称  |