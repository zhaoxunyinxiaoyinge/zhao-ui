## ElInput组件的使用
```vue
<script setup >
  import {ref} from "vue"
    const password=ref("xiaomei");
    const val=ref("ok");
    const content=ref("这段内容可以被清除")
</script>
  <ZInput :type='"text"' placeholder='请输入内容测试'  v-model='password'  style="width:500px"> 
    <template #prepend>https://</template>
     <template #append>.com</template>
</ZInput>
```
<script setup >
  import {ref} from "vue"
    const password=ref("xiaomei");
    const val=ref("ok");
    const content=ref("这段内容可以被清除")
</script>
## 前后插入内容
  <ZInput :type='"text"' placeholder='请输入内容测试'  v-model='password'  style="width:500px"> 
    <template #prepend>https://</template>
     <template #append>.com</template>
  </ZInput>

## 普通输入框
```vue
<script setup >
  import {ref} from "vue"
    const password=ref("xiaomei");
    const val=ref("ok");
    const content=ref("这段内容可以被清除")
</script>
    <ZInput v-model="val" laceholder='请输入内容测试' style="width:500px"></ZInput>
```
  <ZInput v-model="val" laceholder='请输入内容测试' style="width:500px"></ZInput>

## 可以清除内容的输入框
```vue
<script setup >
  import {ref} from "vue"
    const password=ref("xiaomei");
    const val=ref("ok");
    const content=ref("这段内容可以被清除")
</script>
    <ZInput v-model="content" clearable laceholder='请输入内容测试' style="width:500px"></ZInput>
```
  <ZInput v-model="content" clearable laceholder='请输入内容测试' style="width:500px"></ZInput>

## 密码输入框
```vue
<script>
    import {ref} from "vue"
    const password=ref("xiaomei");
    const val=ref("ok");
    const content=ref("这段内容可以被清除");
</script>
  <ZInput v-model="password"  showPassWord laceholder='请输入内容测试' style="width:500px"></ZInput>
```
<ZInput v-model="password"  showPassWord laceholder='请输入内容测试' style="width:500px"></ZInput>

## 输入框前置和后置图标
```vue
<script>
    import {ref} from "vue"
    const password=ref("xiaomei");
    const val=ref("ok");
    const content=ref("这段内容可以被清除");
</script>
  <ZInput v-model="content" prefixIcon="icon-search" size='small'   laceholder='请输入内容测试' style="width:500px"></ZInput>
```
  <ZInput v-model="content" prefixIcon="icon-search" size='small'   laceholder='请输入内容测试' style="width:500px"></ZInput>

## 文本输入框自动适应
```vue
<script>
    import {ref} from "vue"
    const password=ref("xiaomei");
    const val=ref("ok");
    const content=ref("这段内容可以被清除");
</script>
  <ZInput v-model="content" type='textarea'  autosize    laceholder='请输入内容测试' style="width:500px"></ZInput>
```
  <ZInput v-model="content"  type="textarea"  autosize  laceholder='请输入内容测试' style="width:500px"></ZInput>

## 文本输入数量计数
```vue
<script>
    import {ref} from "vue"
    const password=ref("xiaomei");
    const val=ref("ok");
    const content=ref("这段内容可以被清除");
</script>
  <ZInput v-model="content" type='textarea'  autosize  :showWordLimit='true'   laceholder='请输入内容测试' style="width:500px"></ZInput>
```
  <ZInput v-model="content"  type="textarea"  autosize  :show-word-limit='true'  :maxlength="30" :rows="3" laceholder='请输入内容测试' style="width:500px"></ZInput>
  <div style='margin-bottom:20px'></div>
  <ZInput v-model="content"  type="text"   :show-word-limit='true'  :maxlength="30" placeholder='请输入内容测试' style="width:500px"></ZInput>