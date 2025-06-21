<template>
    <div>
        <div class="content">按钮组</div>
        <ZButton :size="'default'" :icon="'icon-cartplus'" cirle type="primary" :disabled="false">按钮</ZButton>
        <ZButton type="danger" disabled>按钮</ZButton>
        <ZButton icon="icon-plus"  type="success" >按钮</ZButton>
        <ZButton type="info" loading>按钮</ZButton>
        <ZButton type="danger" :size="'large'">按钮</ZButton>
        <ZButton type="info" :size="'default'" icon="icon-iconfontbi">按钮</ZButton>
        <ZButton type="danger"  icon="icon-plus"></ZButton>
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