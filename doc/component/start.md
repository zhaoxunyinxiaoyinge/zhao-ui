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
      <ZStart :value='value' :maxValue='maxValue'></ZStart>
</template>
```
1. 默认使用模式
  <ZStart :value="1" :maxValue='5'></ZStart>
2. 仅可以展示的星星
  <ZStart disabled :value="1" :maxValue='5'></ZStart>
3. 不同颜色的星星
  <ZStart  :value="1" :activeColor='"#99CC99"' :maxValue='5'></ZStart>
## 属性
  | 属性名        | 属性值          | 类型  |
| ------------- |:-------------:| -----:|
| value         | 1             | number|
| maxValue         | 5            | number|
| disabled         | false             | boolean|
| activeColor         | gold             |string|
