import type { App, Plugin} from 'vue'
import {ref} from "vue"
import {useGlobalConfig} from "./../utils/useglobalcofig";
import type {GlobalConfig} from "@zhao/utils/tokens"

// 导入组件
import { ZButton,type ButtonProps,type ButtonInstance } from './button'
import {ZButtonGroup,type ButtonGroupProps,type  ButtonGroupInstance} from  "./buttonGroup"
import { ZIcon,type IconInstance,type IconProps} from './icon'
import { ZLink,type LinkInstance,type LinkProps } from './link'
import { ZCard,type CardInstance,type CardProps } from './card'
import { default as  ZInput,type inputTypes,type ZInputInstance} from './input'
import { ZInputNumber,type ZInputNumberInstance,type inputNumberTypes } from './inputNmuber'
import { ZTooltip,type TooltipInstance,type TooltipProps } from './tooltip'
import { ZSpace,type SpaceInstance,type SpaceProps} from './space'
import { ZStart,type StartInstance,type StartProps } from './start'
import { ZText,type TextInstance,textType } from './text'
import { ZRow,type RowInstance,type RowProps } from './row'
import { ZCol ,type ColInstance,type ColProps} from './col'
import { ZScrollBarBar,type ScrollBarInstance,type ScrollbarProps } from './scrollBar'
import { ZAutocomplete } from './autocomplete'
import {ZConfigProvide,type ConfigProvideInstance,type getConfigProviderPropsType } from "./configrovider"
import {ZContainer,type containerPorpsType,type ContainerInstance} from "./container"

// 导出组件类型
export type {
  containerPorpsType,
  ContainerInstance,
  ButtonInstance,
  ButtonProps,
  CardInstance,
  CardProps,
  ColInstance,
  ColProps,
  IconInstance,
  IconProps,
  ZInputInstance,
  inputTypes,
  ZInputNumberInstance,
  inputNumberTypes,
  LinkInstance,
  LinkProps,
  RowInstance,
  RowProps,
  ScrollBarInstance,
  ScrollbarProps,
  SpaceInstance,
  SpaceProps,
  TooltipInstance,
  TooltipProps,
  StartInstance,
  StartProps,
  textType,
  TextInstance,
  ButtonGroupInstance,
  ButtonGroupProps,
  ConfigProvideInstance,
  getConfigProviderPropsType
}


// 组件列表
export const components = [
  ZButton,
  ZIcon,
  ZLink,
  ZCard,
  ZInput,
  ZTooltip,
  ZSpace,
  ZStart,
  ZText,
  ZRow,
  ZCol,
  ZScrollBarBar,
  ZAutocomplete,
  ZInputNumber,
  ZButtonGroup,
  ZConfigProvide,
  ZContainer
]




// 统一注册插件
export const ZhaoUI = {
  version:"0.1",
  install(app: App,options:GlobalConfig={}) {
    //接受全局注册时，传入的参数，通过根实例注入
    const config=ref<GlobalConfig>(options)
    useGlobalConfig(app,config)
    components.forEach(component => {
      if (component && typeof component.install === 'function') {
        component.install(app,options);
      }
    })
  }
}

// 导出单个组件
export {
  ZButton,
  ZIcon,
  ZLink,
  ZCard,
  ZInput,
  ZTooltip,
  ZSpace,
  ZStart,
  ZText,
  ZRow,
  ZCol,
  ZScrollBarBar,
  ZAutocomplete,
  ZInputNumber,
  ZButtonGroup
}

// 导出默认插件
export default ZhaoUI