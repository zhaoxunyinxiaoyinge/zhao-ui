# 安装指南
## 安装包管理器
 ::: tip  1. npm install zhao-ui --save 
 :::
 
 ::: tip  2. pnpm  install zhao-ui --save
 :::

### 使用步骤
  ::: tip
    1. 使用方法:
        import {createApp} from "vue";
        import App from "./App.vue"
        import ZhaoUI from "zha-ui";
        import "./../dist/them-chalk/css/index.css"
        let app=createApp(
            App
        )
        app.use(ZhaoUI);
        app.mount("#app")
  :::

### 浏览器直接引入
::: tip 1. 
    ```vue
      <head>
          <!-- Import style -->
          <link rel="stylesheet" href="//unpkg.com/zhao-ui/dist/them-chalk/css/index.css" />
          <!-- Import Vue 3 -->
          <script src="//unpkg.com/vue@3"></script>
          <!-- Import component library -->
          <script src="//unpkg.com/zhao-ui"></script> 
        </head>
    ```