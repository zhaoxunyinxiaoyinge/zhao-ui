## space的使用
``` vue
  <template>
      <ZSpace>
        <z-button type='warning' size='default' icon="icon-bad">警告按钮</z-button>
        <z-button type='info' size='default' icon="icon-comment">通知按钮</z-button>
        <z-button type='warning' size='default' icon="icon-bad">警告按钮</z-button>
        <z-button type='info' size='default' icon="icon-comment">通知按钮</z-button>
      </ZSpace>
  </template>
```
## space 基础用法
```vue
<template>
 <ZSpace  :size='20'>
        <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
</ZSpace>
</template>
```
<ZSpace  :size='20'>
      <div class='list'></div>
        <div class='list'></div>
        <div class='list'></div>
        <div class='list'></div>
</ZSpace>

## 垂直布局
```vue
<template>
 <ZSpace  :size='20'>
        <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
  </ZSpace>
  </template>
```
  <ZSpace :direction='"vertical"'  :size='20'>
        <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
  </ZSpace>

## 分隔符
```vue
<template>
 <ZSpace  :size='20' separator='$'>
        <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
  </ZSpace>
  </template>
```
  <ZSpace   :size='20' separator='$'>
        <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
  </ZSpace>

  ## 自动换行
  ```vue
  <template>
     <ZSpace  :size='20' separator='$'>
        <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
  </ZSpace>
  </template>
  ```
   <ZSpace  :size='20' wrap>
         <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
         <div class='list'></div>
  </ZSpace>

## 对齐方式
   ```vue
    <template>
     <ZSpace  :size='20'  alignment="center">
        <div class='list-one'></div>
         <div class='list-two'></div>
         <div class='list-three'></div>
  </ZSpace>
  </template>
   ```
   <ZSpace  :size='20'  alignment="center"  direction='vertical'>
        <div class='list-one'></div>
         <div class='list-two'></div>
         <div class='list-three'></div>
  </ZSpace>

  ## 容器填充
   ```vue
    <template>
     <ZSpace  :size='20'  alignment="center">
        <div class='list-one'></div>
         <div class='list-two'></div>
         <div class='list-three'></div>
  </ZSpace>
  </template>
   ```
  <ZSpace  :size='20' :fillRatio='.4'   wrap>
        <div  style='height:100px;background:#333' >看JFK大家看到</div>
        <div  style='height:100px;background:#333' >看JFK大家看到</div>
        <div  style='height:100px;background:#333' >看JFK大家看到</div>
  </ZSpace>

  <style scope>
    .list {
      background:#ccc;
      height:200px;
      width:200px;
    }

    .list-one {
      width:100px;
      height:50px;
      background:#ccc
    }

    .list-two {
      width:30px;
      height:30px;
      background:#333
    }

    .list-three {
      width:50px;
      height:40px;
      background:#eee
    }

  </style>