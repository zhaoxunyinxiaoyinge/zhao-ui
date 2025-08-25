## scrollbar组件的使用

```vue
<script lang='ts' setup>
    import {ref} from "vue";
</script>
<template> 
    <div>
        <ZScrollBar>
            <div class="content">
                这是一段测试，vue3是一个非常优秀的框架,欢迎使用vue3,前端的框架层出不穷，但是vue 是独树一帜。
            </div>
        </ZScrollBar>
    </div>
</template>
```
<ZScrollBar :tag="'p'">
    <div class="content">
        这是一段测试，vue3是一个非常优秀的框架,欢迎使用vue3,前端的框架层出不穷，但是vue 是独树一帜。《神探狄仁杰》由《使团惊魂》、《蓝衫记》和《滴血雄鹰》三个各自独立又息息相关的故事组成。《使团惊魂》讲述武周年间，突厥战争结束，举国上下迎接突厥议和使团的到来。然而就在使团逗留期间，京城接连突发了几件举国震惊的大案。严峻的内忧外患令武则天忧思如焚，急调狄仁杰进京火速破案。《蓝衫记》中狄仁杰与护卫李元芳正在乡间暗查民情，然而一起一天内连发两起命案的案件引起了他们的注意。《滴血雄鹰》则由一幅用鲜血图画的滴血雄鹰引出。
        这是一段测试，vue3是一个非常优秀的框架,欢迎使用vue3,前端的框架层出不穷，但是vue 是独树一帜。《神探狄仁杰》由《使团惊魂》、《蓝衫记》和《滴血雄鹰》三个各自独立又息息相关的故事组成。《使团惊魂》讲述武周年间，突厥战争结束，举国上下迎接突厥议和使团的到来。然而就在使团逗留期间，京城接连突发了几件举国震惊的大案。严峻的内忧外患令武则天忧思如焚，急调狄仁杰进京火速破案。《蓝衫记》中狄仁杰与护卫李元芳正在乡间暗查民情，然而一起一天内连发两起命案的案件引起了他们的注意。《滴血雄鹰》则由一幅用鲜血图画的滴血雄鹰引出。这是一段测试，vue3是一个非常优秀的框架,欢迎使用vue3,前端的框架层出不穷，但是vue 是独树一帜。《神探狄仁杰》由《使团惊魂》、《蓝衫记》和《滴血雄鹰》三个各自独立又息息相关的故事组成。《使团惊魂》讲述武周年间，突厥战争结束，举国上下迎接突厥议和使团的到来。然而就在使团逗留期间，京城接连突发了几件举国震惊的大案。严峻的内忧外患令武则天忧思如焚，急调狄仁杰进京火速破案。《蓝衫记》中狄仁杰与护卫李元芳正在乡间暗查民情，然而一起一天内连发两起命案的案件引起了他们的注意。《滴血雄鹰》则由一幅用鲜血图画的滴血雄鹰引出。这是一段测试，vue3是一个非常优秀的框架,欢迎使用vue3,前端的框架层出不穷，但是vue 是独树一帜。《神探狄仁杰》由《使团惊魂》、《蓝衫记》和《滴血雄鹰》三个各自独立又息息相关的故事组成。《使团惊魂》讲述武周年间，突厥战争结束，举国上下迎接突厥议和使团的到来。然而就在使团逗留期间，京城接连突发了几件举国震惊的大案。严峻的内忧外患令武则天忧思如焚，急调狄仁杰进京火速破案。《蓝衫记》中狄仁杰与护卫李元芳正在乡间暗查民情，然而一起一天内连发两起命案的案件引起了他们的注意。《滴血雄鹰》则由一幅用鲜血图画的滴血雄鹰引出。这是一段测试，vue3是一个非常优秀的框架,欢迎使用vue3,前端的框架层出不穷，但是vue 是独树一帜。《神探狄仁杰》由《使团惊魂》、《蓝衫记》和《滴血雄鹰》三个各自独立又息息相关的故事组成。《使团惊魂》讲述武周年间，突厥战争结束，举国上下迎接突厥议和使团的到来。然而就在使团逗留期间，京城接连突发了几件举国震惊的大案。严峻的内忧外患令武则天忧思如焚，急调狄仁杰进京火速破案。《蓝衫记》中狄仁杰与护卫李元芳正在乡间暗查民情，然而一起一天内连发两起命案的案件引起了他们的注意。《滴血雄鹰》则由一幅用鲜血图画的滴血雄鹰引出。
    </div>
</ZScrollBar>

## 横向滚动
```vue
        <template>
        <scroll-bar :height="150">
            <div class="scrollbar-flex-content">
            <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
                {{ item }}
            </p>
            </div>
        </scroll-bar>
        </template>

        <style scoped>
        .scrollbar-flex-content {
        display: flex;
        width: fit-content;
        }
        .scrollbar-demo-item {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: var(--el-color-danger-light-9);
        color: var(--el-color-danger);
        }
        </style>
```

  <ZScrollBar :height=150 @endReached="handleEnd">
    <div class="scrollbar-flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
                {{ item }}
      </p>
    </div>
  </ZScrollBar>

  <script>
    import {defineComponent} from "vue"
    export default defineComponent({
      setup(){
        const handleEnd=(direction)=>{
            console.log(direction)
        }
        return {
          handleEnd
        }
      }
    })

  </script>

<style scoped>
.scrollbar-flex-content {
  display: flex;
  /* width: fit-content; */
  flex-wrap:nowrap
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: red;
  color: #fff;
}
</style>

## 属性
| name        | 属性           | 值  |
| ------------:|:-------------:| -----:|