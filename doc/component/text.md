## text组件
   ```vue
      <script setup lang="ts">
          import {ElText} from "@zhao/components";
      </script>
      <template>
          <el-text :size='"largeg"' :type='"success"' :tag='"div"'>这是一段文本</el-text>
      </template>
   ```
 <el-text :size='"largeg"' :type='"success"' tag='div'>这是一段文本</el-text>
 <el-text :size='"small"' :type='"danger"' tag='div'>这是一段文本</el-text>
 <el-text :size='"default"' :type='"warning"' tag='div'>这是一段文本</el-text>
  <el-text :size='"small"' :type='"warning"' tag='div' :truncated='true' class="wx-100">这是一段文本</el-text>

  <style lang='scss'>
    .wx-100 {
        width:100px;
    }
  </style>