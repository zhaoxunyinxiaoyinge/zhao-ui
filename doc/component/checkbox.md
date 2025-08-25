## checkbox的基础使用
  ```vue
  <script lang="ts" setup>
    import {ref} from "vue"
    const box=ref(true);
    const box1=ref(false);
    const arr=ref(["篮球"]);
  </script>
  <template>
  <z-checkbox  :modelValue="box" label="足球" ></z-checkbox>
    <z-checkbox  :modelValue="box" label="足球" ></z-checkbox>
  <z-checkbox  v-model="false" label="飞机" ></z-checkbox>
    <z-checkbox  :modelValue="box" label="足球" ></z-checkbox>
  <z-checkbox  v-model="box1" label="飞机" ></z-checkbox>
  </template>
  ```
  <script lang="ts" setup>
    import {ref} from "vue"
    const box=ref(true);
    const box1=ref(false)
    const arr=ref(["篮球"]);
  </script>
  <z-checkbox  :modelValue="box" label="足球" ></z-checkbox>
  <z-checkbox  v-model="box1" label="飞机" ></z-checkbox>
  <z-checkbox  :modelValue="box" label="足球" ></z-checkbox>
  <z-checkbox  v-model="box1" label="飞机" ></z-checkbox>

 ## checkbox选择框组
```vue
  <script lang="ts" setup>
    import {ref} from "vue"
    const box=ref(true);
    const box1=ref(false);
    const arr=ref(["篮球"]);
  </script>
  <template>
   <z-checkbox-group v-model="arr">
    <z-checkbox :border='true' label='篮球' value="篮球">篮球</z-checkbox>
    <z-checkbox label='羽毛球' value='羽毛球'>羽毛球</z-checkbox>
    <z-checkbox label='足球' value='足球'></z-checkbox>
  </z-checkbox-group>
  </template>
```
  <z-checkbox-group v-model="arr" min=1 max=3>
   <z-checkbox :border='true'  label='篮球' value="篮球">篮球</z-checkbox>
    <z-checkbox label='羽毛球' value='羽毛球'>羽毛球</z-checkbox>
    <z-checkbox label='足球' value='足球'></z-checkbox>
    <z-checkbox label='排球' value='排球'></z-checkbox>
  </z-checkbox-group>
