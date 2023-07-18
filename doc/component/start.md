##  ElStart 的使用
```vue
<script lang='ts' setup>
   import  {defineComponent,vue} from "vue";
   export default defineComponent({
    setup(){
      const value=ref<number>(2);
      const maxValue=ref<number>(5);
      return {
        value,
        maxValue
      }
    }
   })
</script>
<template> 
      <el-start :value='value' :maxValue='maxValue'></el-start>
</template>
```
1. 默认使用模式
  <el-start :value="1" :maxValue='5'></el-start>
2. 仅可以展示的星星
  <el-start disabled :value="1" :maxValue='5'></el-start>
3. 不同颜色的星星
  <el-start  :value="1" :activeColor='"#99CC99"' :maxValue='5'></el-start>
## 属性
  | 属性名        | 属性值          | 类型  |
| ------------- |:-------------:| -----:|
| value         | 1             | number|
| maxValue         | 5            | number|
| disabled         | false             | boolean|
| activeColor         | gold             |string|
