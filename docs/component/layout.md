# 基础页面布局
```vue
<script setup lang="ts">
</script>
<template>
  <ZRow>
    <ZCol :span="24"><div class="grid-content ep-bg-purple-dark" /></ZCol>
  </ZRow>
  <ZRow>
    <ZCol :span="12"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="12"><div class="grid-content ep-bg-purple-light" /></ZCol>
  </ZRow>
  <ZRow>
    <ZCol :span="8"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="8"><div class="grid-content ep-bg-purple-light" /></ZCol>
    <ZCol :span="8"><div class="grid-content ep-bg-purple" /></ZCol>
  </ZRow>
  <ZRow>
    <ZCol :span="6"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="6"><div class="grid-content ep-bg-purple-light" /></ZCol>
    <ZCol :span="6"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="6"><div class="grid-content ep-bg-purple-light" /></ZCol>
  </ZRow>
  <ZRow :gutter='20'>
    <ZCol :span="4"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="4"><div class="grid-content ep-bg-purple-light" /></ZCol>
    <ZCol :span="4"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="4"><div class="grid-content ep-bg-purple-light" /></ZCol>
    <ZCol :span="4"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="4"><div class="grid-content ep-bg-purple-light" /></ZCol>
  </ZRow>
</template>
<style lang="scss">
  .ZRow {
  margin-bottom: 20px;
}
.ZRow:last-child {
  margin-bottom: 0;
}
.ZCol {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```
## 图标类型 
  <ZRow >
    <ZCol :span="24"><div class="grid-content ep-bg-purple-dark" /></ZCol>
  </ZRow>
  <ZRow :gutter='20'>
    <ZCol :span="12"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="12"><div class="grid-content ep-bg-purple-light" /></ZCol>
  </ZRow>
  <ZRow :gutter='20'>
    <ZCol :span="8"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="8"><div class="grid-content ep-bg-purple-light" /></ZCol>
    <ZCol :span="8"><div class="grid-content ep-bg-purple" /></ZCol>
  </ZRow>
  <ZRow :gutter='20'>
    <ZCol :span="6"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="6"><div class="grid-content ep-bg-purple-light" /></ZCol>
    <ZCol :span="6"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="6"><div class="grid-content ep-bg-purple-light" /></ZCol>
  </ZRow>
  <div>
  <ZRow :gutter='20'>
    <ZCol :span="4"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="4"><div class="grid-content ep-bg-purple-light" /></ZCol>
    <ZCol :span="4"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="4"><div class="grid-content ep-bg-purple-light" /></ZCol>
    <ZCol :span="4"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="4"><div class="grid-content ep-bg-purple-light" /></ZCol>
  </ZRow>
  </div>

## 列的偏移

  ```vue
  <template>
    <ZRow :gutter='20'>
      <ZCol :span="4"><div class="grid-content ep-bg-purple" /></ZCol>
      <ZCol :span="4"><div class="grid-content ep-bg-purple-light" /></ZCol>
      <ZCol :span="4"><div class="grid-content ep-bg-purple" /></ZCol>
      <ZCol :span="4"><div class="grid-content ep-bg-purple-light" /></ZCol>
      <ZCol :span="4"><div class="grid-content ep-bg-purple" /></ZCol>
      <ZCol :span="4"><div class="grid-content ep-bg-purple-light" /></ZCol>
  </ZRow>
  </template>
  ```
  <ZRow :gutter='20'>
    <ZCol :span="8"><div class="grid-content ep-bg-purple" /></ZCol>
    <ZCol :span="8" :offset='6'><div class="grid-content ep-bg-purple-light" /></ZCol>
  </ZRow>

## 容器对齐
```vue
<template>
  <ZRow :gutter='20' justify="center">
      <ZCol :span="4"><div class="grid-content ep-bg-purple" /></ZCol>
      <ZCol :span="4"><div class="grid-content ep-bg-purple-light" /></ZCol>
      <ZCol :span="4"><div class="grid-content ep-bg-purple" /></ZCol>
  </ZRow>
</template>
```
<ZRow :gutter='20' justify="center">
      <ZCol :span="6"><div class="grid-content ep-bg-purple" /></ZCol>
      <ZCol :span="6"><div class="grid-content ep-bg-purple-light" /></ZCol>
      <ZCol :span="6"><div class="grid-content ep-bg-purple" /></ZCol>
</ZRow>
<ZRow :gutter='20' justify="end">
      <ZCol :span="6"><div class="grid-content ep-bg-purple" /></ZCol>
      <ZCol :span="6"><div class="grid-content ep-bg-purple-light" /></ZCol>
      <ZCol :span="6"><div class="grid-content ep-bg-purple" /></ZCol>
</ZRow>
<ZRow :gutter='20' justify="start">
      <ZCol :span="6"><div class="grid-content ep-bg-purple" /></ZCol>
      <ZCol :span="6"><div class="grid-content ep-bg-purple-light" /></ZCol>
      <ZCol :span="6"><div class="grid-content ep-bg-purple" /></ZCol>
</ZRow>
<ZRow :gutter='20' justify="space-around">
      <ZCol :span="6"><div class="grid-content ep-bg-purple" /></ZCol>
      <ZCol :span="6"><div class="grid-content ep-bg-purple-light" /></ZCol>
      <ZCol :span="6"><div class="grid-content ep-bg-purple" /></ZCol>
</ZRow>

<style lang="css">
.el-row {
  margin-bottom: 20px;
  }
.el-row {
  margin-bottom:20px
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background:#ccc;
}
</style>

