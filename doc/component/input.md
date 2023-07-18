## ElInput组件的使用
  ```vue
    <template>
    <el-input type='text' placeholder='请输入内容测试' prefixIcon='add-plus'  v-model='value'  > 
        <template #prepend>https://</template>
        <template #append>.com</template>
    </el-input>
    </template>
    <script lang='ts' setup>
      import {ref} from "vue";
      const value=ref("ok");
    </script>
  ```
  ### 普通input输入框
  <el-input type='text' placeholder='请输入内容测试'  v-model="value"  > 
      <template #prepend>https://</template>
      <template #append>.com</template>
  </el-input>

  ### textareat输入框
  ```vue
    <template>
    <el-input type='textarea' placeholder='请输入内容测试' :rows='3' :showWordLimit=true :maxLength='30' > 
    </el-input>
    </template>
    <script lang='ts' setup>
      import {ref} from "vue";
      const value=ref("ok");
    </script>
  ```
  <el-input type='textarea'   :rows='3' :showWordLimit=true :maxLength='30' v-model='value'> 
  </el-input>



