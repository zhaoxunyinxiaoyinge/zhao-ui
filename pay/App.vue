<template>
    <div>
        <div class="content">按钮组</div>
        <ZButton :size="'default'" :icon="'icon-add'" cirle type="primary" :disabled="false">按钮</ZButton>
        <ZButton type="danger" disabled>按钮</ZButton>
        <ZButton icon="icon-add"  type="success" plain>按钮</ZButton>
        <ZButton type="info" >按钮</ZButton>
        <ZButton type="warning" >按钮</ZButton>
        <ZStart :value="4" ></ZStart>
        <videos :name="'xioakei'"  age="'34'"></videos>
    </div>
</template>

<script lang="ts" setup>
import { ZStart } from "zha-ui";
import videos from "./src/components/videos.vue";

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