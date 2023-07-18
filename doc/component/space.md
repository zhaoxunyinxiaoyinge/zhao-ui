## Space 的使用
```vue
<script lang='ts' setup>
   import  {defineComponent,vue} from "vue";
</script>
<template> 
        <el-space size="small"  :wrap="true">
         <el-card>
            <template v-slot:header>
                  <div>这是card的头部</div>
            </template>
            <template v-slot:body>
                  <div>这是body类容</div>
            </template>
         </card>

          <el-card>
            <template v-slot:header>
                  <div>这是card的头部</div>
            </template>
            <template v-slot:body>
                  <div>这是body类容</div>
            </template>
         </card>

          <el-card>
            <template v-slot:header>
                  <div>这是card的头部</div>
            </template>
            <template v-slot:body>
                  <div>这是body类容</div>
            </template>
         </card>
          <el-card>
            <template v-slot:header>
                  <div>这是card的头部</div>
            </template>
            <template v-slot:body>
                  <div>这是body类容</div>
            </template>
         </card>
         <el-space>
</template>
```
<el-space :size="[10,10]" :wrap='true'>
      <el-card>
      <template v-slot:header>
            <div>这是card的头部</div>
      </template>
      <template v-slot:body>
            <div>这是body类容</div>
      </template>
      </el-card>
      <el-card>
      <template v-slot:header>
            <div>这是card的头部</div>
      </template>
      <template v-slot:body>
            <div>这是body类容</div>
      </template>
      </el-card>
      <el-card>
      <template v-slot:header>
            <div>这是card的头部</div>
      </template>
      <template v-slot:body>
            <div>这是body类容</div>
      </template>
      </el-card>
      <el-card>
      <template v-slot:header>
            <div>这是card的头部</div>
      </template>
      <template v-slot:body>
            <div>这是body类容</div>
      </template>
      </el-card>
</el-space>

## 属性
