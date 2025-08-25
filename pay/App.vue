<template>
    <div>
        <div class="content">按钮组</div>
        <ZButton :size="'default'" :icon="'icon-cartplus'" cirle type="primary" :disabled="false">按钮</ZButton>
        <ZButton type="danger" disabled>按钮</ZButton>
        <ZButton icon="icon-icon-test2"  type="success" >按钮</ZButton>
        <ZButton type="info" loading>按钮</ZButton>
        <ZButton type="danger" :size="'large'">按钮</ZButton>
        <ZButton type="info" :size="'default'" icon="icon-iconfontbi">按钮</ZButton>
        <ZButton type="danger"  icon="icon-plus"></ZButton>
        <ZButtonGroup>
            <ZButton type="primary" icon="icon-cartplus">按钮</ZButton>
            <ZButton type="primary" icon="icon-plus">按钮</ZButton>
        </ZButtonGroup>
        <ZButton type="info" size="large">历史</ZButton>
        <ZButton tag="a" :href="'https://www.baidu.com'"  type="primary" >链接按钮</ZButton>
    </div>
</template>

<script lang="ts" setup>


</script>
<style scoped>
.conent {
    margin: 20px 0;
    font-size: 14px;
}

.flex {
    display: flex;
    align-items: center;
}

.button {
    word-break: keep-all;
    margin-left: 5px;
}
</style>