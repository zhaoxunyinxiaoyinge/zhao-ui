## Icon 图标的使用
```vue
<script lang='ts' setup>
    import {ref} from "vue";
    const color=ref<string>('#000');
    const size=ref<number>(23)
</script>
<template> 
   <ZIcon class="infont  z-icon-file-delete" :color="color" :size="size">图标删除</ZIcon>
</template>
```
<ul class="icon_lists dib-box">       
<li class="dib">
            <ZIcon :icon='"view"' />
            <div class="name">
              view
            </div>
        </li>
<li class="dib">
            <ZIcon :icon='"message"' />
            <div class="name">
              message
            </div>
          </li>
          
<li class="dib">
            <ZIcon :icon="'search'"/>
            <div class="name">
              search
            </div>
          </li>
<li class="dib">
    <ZIcon :icon="'edit'"/>
    <div class="name">
        edit
    </div>
</li>

<li class="dib">
<ZIcon :icon="'link'"/>
<div class="name">
    link
</div>
</li>

<li class="dib">
<ZIcon :icon="'setting'"/>
<div class="name">
    setting
</div>
</li>

<li class="dib">
<ZIcon :icon="'upload'"/>
<div class="name">
    upload
</div>
</li>

<li class="dib">
<ZIcon :icon="'download'"/>
<div class="name">
    download
</div>
</li>

<li class="dib">
<ZIcon :icon="'notification'"/>
<div class="name">
    notification
</div>
</li>

<li class="dib">
<ZIcon :icon="'notification_off'"/>
<div class="name">
    notification_off
</div>
</li>

<li class="dib">
<ZIcon :icon="'lock'"/>
<div class="name">
    lock
</div>
</li>

<li class="dib">
<ZIcon :icon="'unlock'"/>
<div class="name">
    unlock
</div>
</li>

<li class="dib">
<ZIcon :icon="'calculator'"/>
<div class="name">
    calculator
</div>
</li>

<li class="dib">
<ZIcon :icon="'image'"/>
<div class="name">
    image
</div>
</li>

<li class="dib">
<ZIcon :icon="'info'"/>
<div class="name">
    info
</div>
</li>

<li class="dib">
<ZIcon :icon="'help_filled'"/>
<div class="name">
    help_filled
</div>
</li>

<li class="dib">
<ZIcon :icon="'help'"/>
<div class="name">
    help
</div>
</li>

<li class="dib">
<ZIcon :icon="'caution'"/>
<div class="name">
    caution
</div>
</li>

<li class="dib">
<ZIcon :icon="'caution_filled'"/>
<div class="name">
    caution_filled
</div>
</li>

<li class="dib">
<ZIcon :icon="'star'"/>
<div class="name">
    star
</div>
</li>

<li class="dib">
<ZIcon :icon="'star_filled'"/>
<div class="name">
    star_filled
</div>
</li>

<li class="dib">
<ZIcon :icon="'arrow_up'"/>
<div class="name">
    arrow_up
</div>
</li>

<li class="dib">
<ZIcon :icon="'arrow_left'"/>
<div class="name">
    arrow_left
</div>
</li>

<li class="dib">
<ZIcon :icon="'arrow_down'"/>
<div class="name">
    arrow_down
</div>
</li>

<li class="dib">
<ZIcon :icon="'arrow_right'"/>
<div class="name">
    arrow_right
</div>
</li>

<li class="dib">
<ZIcon :icon="'page_turning_left'"/>
<div class="name">
    page_turning_left
</div>
</li>

<li class="dib">
<ZIcon :icon="'page_turning_right'"/>
<div class="name">
    page_turning_right
</div>
</li>

<li class="dib">
<ZIcon :icon="'show_less'"/>
<div class="name">
    show_less
</div>

</li>

<li class="dib">
<ZIcon :icon="'show_more'"/>
<div class="name">
    show_more
</div>

</li>

<li class="dib">
<ZIcon :icon="'benefits'"/>
<div class="name">
    benefits
</div>
</li>
</ul>

<style scope>
    .icon_lists {
        display:flex;
        flex-wrap:wrap;
        font-size:14px;
    }

    .el-icon {
        font-size:20px;
    }

    .dib {
        display:flex;
        flex-direction:column;
        align-items:center;
        width:120px;
        height:80px
    }

</style>
:::tip 字体图标
    目前仅仅支持，用类的形式导入图标
:::

## 属性
| mame        | 属性           | 值  |
| ------------:|:-------------:| -----:|
| 图标名称 | icon     |  字符串 |