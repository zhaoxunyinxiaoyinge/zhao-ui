import { ExtractPropTypes, PropType } from "vue";
declare enum ButtonTYpes {
    "default" = "default",
    "primary" = "primary",
    "danger" = "danger",
    "warning" = "warning",
    "success" = "success",
    "info" = "info"
}
declare enum linkTYpes {
    'always' = "always",
    'hover' = "hover",
    'never' = "never"
}
interface LinkType {
    type: ButtonTYpes;
    underline: linkTYpes | boolean;
}
type Button = {
    type?: ButtonTYpes;
    autoInsertSpace: boolean;
    plain: boolean;
    round: boolean;
};
interface Message {
    max?: number;
    grouping?: boolean;
    duration?: number;
    showClose?: false;
    offset?: number;
    plain?: boolean;
}
interface langObject {
    [key: string]: {
        [key: string]: any;
    };
}
declare enum sizes {
    'large' = 0,
    'default' = 1,
    'small' = 2
}
export declare const getConfigProviderProps: {
    locale: {
        type: PropType<langObject>;
        default: undefined;
    };
    size: {
        type: PropType<keyof sizes>;
        default: undefined;
    };
    zIndex: {
        type: PropType<number>;
        default: undefined;
    };
    namespace: {
        type: PropType<string>;
        default: string;
    };
    button: {
        type: PropType<Button>;
        default: () => {
            autoInsertSpace: boolean;
            plain: boolean;
            round: boolean;
        };
    };
    link: {
        type: PropType<LinkType>;
        default: () => {
            type: string;
            underline: boolean;
        };
    };
    message: {
        type: PropType<Message>;
    };
    "empty-values": {
        type: PropType<any[]>;
        default: undefined;
    };
    "value-on-clear": {
        type: PropType<String | Function | Number | Boolean>;
        default: undefined;
    };
};
export type getConfigProviderPropsType = ExtractPropTypes<typeof getConfigProviderProps>;
export {};
