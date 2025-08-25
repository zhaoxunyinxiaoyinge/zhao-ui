## text组件
  ## 成功文本
   ```vue
      <script setup lang="ts">
          import {ElText} from "@zhao/components";
      </script>
      <template>
          <ZText :size='"largeg"' :type='"success"' :tag='"div"'>2023年6月14日 · Element Plus 基于 Vue 3，面向设计师和开发者的组件库 指南 了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。 查看详情</ZText>
      </template>
   ```
 <ZText :size='"largeg"' :type='"success"' tag='div'>2023年6月14日 · Element Plus 基于 Vue 3，面向设计师和开发者的组件库 指南 了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。 查看详情</ZText>

  ## 小尺寸文本危险
  ```vue
      <script setup lang="ts">
          import {ElText} from "@zhao/components";
      </script>
    <template>
          <ZText :size='small' :type='"danger"' :tag='"div"'>2023年6月14日 · Element Plus 基于 Vue 3，面向设计师和开发者的组件库 指南 了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。 查看详情</ZText>
      </template>
  ```
 <ZText :size='"small"' :type='"danger"' tag='div'>2023年6月14日 · Element Plus 基于 Vue 3，面向设计师和开发者的组件库 指南 了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。 查看详情</ZText>
  
  ## 默认文本警告
  ```vue
    <template>
          <ZText :size='"default"'  :tag='"div"'>2023年6月14日 · Element Plus 基于 Vue 3，面向设计师和开发者的组件库 指南 了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。 查看详情</ZText>
      </template>
  ```
 <ZText :size='"default"'  tag='div'>2023年6月14日 · Element Plus 基于 Vue 3，面向设计师和开发者的组件库 指南 了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。 查看详情</ZText>

  ## 小尺寸文本警告,省阅号
  ```vue
      <script setup lang="ts">
          import {ElText} from "@zhao/components";
      </script>
    <template>
          <ZText :size='"large"' :truncated='true' :type='"warning"' :tag='"div"'>2023年6月14日 · Element Plus 基于 Vue 3，面向设计师和开发者的组件库 指南 了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。 查看详情</ZText>
      </template>
  ```
<ZText :size='"large"' :type='"warning"' tag='div' :truncated='true' class='wx-200'> 
2023年6月14日 · Element Plus 基于 Vue 3，面向设计师和开发者的组件库 指南 了解设计指南，帮助产品设计人员搭建逻辑清晰、结构合理且高效易用的产品。 查看详情 </ZText>

  <style lang='scss'>
    .wx-200 {
        width:200px;
    }
  </style>