## Card 图标的使用

```vue
<script lang='ts' setup>
   import  {defineComponent,vue} from "vue";
</script>
<template> 
         <ZCard :shadow='"hover"' :bodyStyle='{color:"red"}'>
            <template v-slot:header>
                  <div>这是card的头部</div>
            </template>
            <div>这是body类容</div>
            <template>
               <div>这是footer</div>
            </template>
         </ZCard>
</template>
```
## 设置基础卡片,hover 显示阴影
   <ZCard  :shadow='"hover"' :body-style='{color:"red"}'>
   <template v-slot:header>
      <div>这是card的头部</div>
         </template>
         <div>这是body类容</div>
      <template #footer>
         <div>这是footer</div>
      </template>
    </ZCard>


```vue
<script lang='ts' setup>
   import  {defineComponent,vue} from "vue";
</script>
<template> 
      <ZCard :shadow='"hover"' header='"刘美玲"' :footer='"周锦荣"' :footer-class='"footer-bg"'>
         <div>这是body类容</div>
      </ZCard>
</template>
<style scope>
      .footer-bg {
         background:#333
      }
</style>
```
## 传入header和footer标题，自定义类名
   <ZCard header='标题' :footer='"标脚"' :footer-class='"footer-bg"'>
            <div>这是body类容</div>
   </ZCard>

   <style scope>
      .footer-bg {
         background:#333
      }
   </style>