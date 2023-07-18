# 基础页面布局
```vue
<script setup lang="ts">
</script>
<template>
  <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark" /></el-col>
  </el-row>
  <el-row>
    <el-col :span="12"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="12"><div class="grid-content ep-bg-purple-light" /></el-col>
  </el-row>
  <el-row>
    <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple-light" /></el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple" /></el-col>
  </el-row>
  <el-row>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="6"><div class="grid-content ep-bg-purple-light" /></el-col>
  </el-row>
  <el-row :gutter='20'>
    <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple-light" /></el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple-light" /></el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple" /></el-col>
    <el-col :span="4"><div class="grid-content ep-bg-purple-light" /></el-col>
  </el-row>
</template>
<style lang="scss">
  .el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
```
## 图标类型 
  <el-row :gutter='20'>
    <el-col :span="12"><div class="grid-content ep-bg-purple-dark" ></div></el-col>
    <el-col :span="12"><div class="grid-content ep-bg-purple-dark" ></div></el-col>
  </el-row>
  <el-row :gutter='20'  :justify='"center"'>
    <el-col :span="8"><div class="grid-content ep-bg-purple-dark" ></div></el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple-dark" ></div></el-col>
    <el-col :span="8"><div class="grid-content ep-bg-purple-dark" ></div></el-col>
  </el-row>

<style lang="css">
.el-row {
  margin-bottom: 20px;
  }
.el-col {
  margin-bottom:20px
}
.el-row:last-child {
  margin-bottom: 0;
  }
.el-col {
  border-radius: 4px;
 }
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background:#ccc;
}
</style>

