## scrollbar组件的使用

```vue
<script lang='ts' setup>
    import {ref} from "vue";
</script>
<template> 
    <div>
        <scroll-bar>
            <div class="content">
                这是一段测试，vue3是一个非常优秀的框架,欢迎使用vue3,前端的框架层出不穷，但是vue 是独树一帜。
            </div>
        </scroll-bar>
    </div>
</template>
```
<div  style="height:120px">
    <scroll-bar :tag="'p'">
        <div class="content">
            这是一段测试，vue3是一个非常优秀的框架,欢迎使用vue3,前端的框架层出不穷，但是vue 是独树一帜。《神探狄仁杰》由《使团惊魂》、《蓝衫记》和《滴血雄鹰》三个各自独立又息息相关的故事组成。《使团惊魂》讲述武周年间，突厥战争结束，举国上下迎接突厥议和使团的到来。然而就在使团逗留期间，京城接连突发了几件举国震惊的大案。严峻的内忧外患令武则天忧思如焚，急调狄仁杰进京火速破案。《蓝衫记》中狄仁杰与护卫李元芳正在乡间暗查民情，然而一起一天内连发两起命案的案件引起了他们的注意。《滴血雄鹰》则由一幅用鲜血图画的滴血雄鹰引出。
        </div>
    </scroll-bar>
</div>



## 属性
| name        | 属性           | 值  |
| ------------:|:-------------:| -----:|