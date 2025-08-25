import DefaultTheme from "vitepress/theme";
import { ZIcon } from "@zhao/components/icon";
import { ZButton } from "@zhao/components/button";
import { ZLink } from "@zhao/components/link";
import { ZScrollBarBar } from "@zhao/components/scrollBar";
import {ZCard} from "@zhao/components/card";
import {ZStart} from "@zhao/components/start"
import {ZInput} from "@zhao/components/input";
import {ZRow,
} from "@zhao/components/row";
import {ZCol} from "@zhao/components/col";
import {ZText} from "@zhao/components/text";
import {ZSpace} from "@zhao/components/space";
import {ZContainer} from "@zhao/components/container";
import {ZHeader} from "@zhao/components/header";
import {ZFooter} from "@zhao/components/footer";
import {ZMain} from "@zhao/components/main";
import { ZAside } from "@zhao/components/aside";
import {ZConfigProvide} from "@zhao/components/configrovider"
import  {ZTable}  from "@zhao/components/tabel";
import {ZTabelColumn} from "@zhao/components/tableColumn";
import {ZCheckbox}  from "@zhao/components/checkbox"
import {ZCheckboxGroup} from "@zhao/components/checkboxgroup"

import "@zhao/them-chlak/src/index.scss";
import "./index.css";
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
        app.use(ZRow);
        app.use(ZCol);
        app.use(ZText);
        app.use(ZSpace);
        app.use(ZContainer);
        app.use(ZHeader);
        app.use(ZFooter);
        app.use(ZMain);
        app.use(ZAside);
        app.use(ZConfigProvide),
        app.use(ZTable);
        app.use(ZTabelColumn);
        app.use(ZCheckbox);
        app.use(ZCheckboxGroup);
    }
}
