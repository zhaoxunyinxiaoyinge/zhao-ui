import {createApp} from "vue";
import App from "./App.vue"
import ZhaoUI from "zha-ui";
import "./../dist/them-chalk/css/index.css"
let app=createApp(
    App
)
app.use(ZhaoUI);
app.mount("#app")