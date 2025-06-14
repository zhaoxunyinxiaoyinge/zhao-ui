import DefaultTheme from "vitepress/theme";
import { ZIcon } from "@zhao/components/icon";
import { ZButton } from "@zhao/components/button";
import { ZLink } from "@zhao/components/link";
import { ZScrollBarBar } from "@zhao/components/scrollBar";
import {ZCard} from "@zhao/components/card";
import {ZStart} from "@zhao/components/start"
import {ZInput} from "@zhao/components/input";
import {  ZRow,
} from "@zhao/components/row";
import {ZCol} from "@zhao/components/col";
import {ZText} from "@zhao/components/text";

import "@zhao/them-chlak/src/index.scss";
export default {
    ...DefaultTheme,
    enhanceApp({ app }) {
        app.use(ZIcon);
        app.use(ZButton);
        app.use(ZLink);
        app.use(ZScrollBarBar);
        app.use(ZCard);
        app.use(ZStart);
        app.use(ZInput);
        app.use(  ZRow,);
        app.use(ZCol);
        app.use(ZText);
    }
}
