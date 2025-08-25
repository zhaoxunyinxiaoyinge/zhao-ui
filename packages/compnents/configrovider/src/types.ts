import { ExtractPropTypes, PropType } from "vue";

enum ButtonTYpes{
  "default"="default","primary"='primary',"danger"='danger',"warning"='warning',"success"='success',"info"='info'
}

enum linkTYpes{
  'always'="always",
  'hover'='hover',
  'never'='never'
}

interface LinkType {
   type:ButtonTYpes,
   underline:linkTYpes|boolean
}
// button 属性的陪配置
  type Button={
    type?:ButtonTYpes,
    autoInsertSpace:boolean,
    plain:boolean,
    round :boolean
  }

interface Message{
  max?:number,
  grouping?:boolean,
  duration ?:number,
  showClose?:false,
  offset?:number,
  plain?:boolean
}



interface  langObject{
  [key:string]:{[key:string]:any},

}
enum sizes{
  'large' , 'default' , 'small'
}
export const getConfigProviderProps={
    locale:{
      type:Object as PropType<langObject>,
      default:undefined
    },
    size:{
      type:String as PropType< keyof sizes>,
      default:undefined
    },
    zIndex:{
      type:Number as PropType<number>,
      default:undefined
    },
    namespace:{
      type:String as PropType<string>,
      default:"el"
    },
    button:{
      type:Object as PropType<Button>,
      default:()=>{
        return {
          autoInsertSpace:false,
          plain:false,
          round:false
        }
      }
    },
    link:{
        type:Object as PropType<LinkType>,
        default:()=>{
          return {
            type:"default",
            underline:false
          }
        }
    },
    message:{
      type:Object as PropType<Message>
    },
    "empty-values":{
      type:Array as PropType<any[]>,
      default:undefined

    },
    "value-on-clear":{
      type:[String,Function,Number,Boolean] as PropType<String|Function|Number|Boolean>,
      default:undefined
    }

  }

  export type getConfigProviderPropsType=ExtractPropTypes<typeof getConfigProviderProps>