## Card 图标的使用

```vue
<script lang='ts' setup>
   import  {defineComponent,vue} from "vue";
</script>
<template> 
         <el-card>
            <template v-slot:header>
                  <div>这是card的头部</div>
            </template>
            <template v-slot:body>
                  <div>这是body类容</div>
            </template>
         </card>
</template>
```
<el-card>
    <template v-slot:header>
       <div>这是头部</div>
   </template>
   <template v-slot:body>
      <div>这是主体类容</div>
   </template>
</el-card>

## 属性
 |属性名|属性值|
 |------|-----|
 |  shadow    |   always ,never , hover |
 |   bodyStyle   |   obj,string  |
