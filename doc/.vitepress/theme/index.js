import DefaultTheme from "vitepress/theme";
import { ZIcon } from "@zhao/components/icon";
import { Button } from "@zhao/components/button";
import { Links } from "@zhao/components/link";
import { ScrollBar } from "@zhao/components/scrollBar";
import {ElCard} from "@zhao/components/card";
import {ElSpace} from "@zhao/components/space";
import {ElStart} from "@zhao/components/start"
import {ElInput} from "@zhao/components/input";
import {ElRow} from "@zhao/components/row";
import {ElCol} from "@zhao/components/col";
import {ElText} from "@zhao/components/text";

import "@zhao/them-chlak/src/index.scss"
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(ZIcon);
        app.use(Button);
        app.use(Links);
        app.use(ScrollBar);
        app.use(ElCard);
        app.use(ElSpace);
        app.use(ElStart);
        app.use(ElInput);
        app.use(ElRow);
        app.use(ElCol);
        app.use(ElText);
    }
}
