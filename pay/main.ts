import {createApp} from "vue";
import App from "./App.vue"
import ZhaUi from "zha-ui";
import "zha-ui/them-chalk/css/index.css";
let app=createApp(
    App
)
app.use(ZhaUi);

app.mount("#app");