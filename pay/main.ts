import {createApp} from "vue";
import App from "./App.vue"
import {ZIcon,Links,Button,ElInput,ElRow,ElCol} from "@zhao/components";

import "./../packages/them-chlak/dist/css/index.css"
let app=createApp(
    App
)
app.use(ZIcon);
app.use(Button);
app.use(Links);
app.use(ElInput);
app.use(ElRow);
app.use(ElCol);
app.mount("#app");