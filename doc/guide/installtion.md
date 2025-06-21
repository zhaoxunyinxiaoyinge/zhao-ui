# 安装指南
### 使用步骤
  ::: tip
    1. npm install zha-ui  或者pnpm add zha-ui
    2. 使用方法:
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

