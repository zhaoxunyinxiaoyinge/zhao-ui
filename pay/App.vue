<template>
    <div>
        <Button type="primary" :disabled="false" size="small" loading=true>按钮</Button>
        <Button type="primary" :disabled="false" size="large" loading=true>按钮</Button>
        <Button type="danger" :disabled="false" size="default" loading=true>按钮</Button>
        <Button type="submit" :disabled="false" size="default" loading=true>按钮</Button>
        <Links>中国人</Links>
        <el-row :tag="'div'">
        <el-input type='text' class="input"  :modelValue="'xiaomei'" placeholder="请输入内容" :show-word-limit="true">
            </el-input>
            <Button class="button" type="primary" :disabled="false" size="default"><span>查询333</span></Button>
        </el-row>
        <el-row>
            <el-col><Button type="primary" :disabled="false" size="default" loading=true>按钮</Button></el-col>
        </el-row>   
        <el-space>
            <div>xiaomei </div>
        </el-space>
    </div>
</template>
<script  setup lang="ts">

</script>
<style scoped>
.flex {
    display: flex;
    align-items: center;
}
.button {
   word-break: keep-all;
   margin-left: 5px;
}

</style>