import { StyleValue } from "vue";
import type { ExtractPropTypes, PropType } from "vue";
export declare enum Shadow {
    "always" = "always",
    "never" = "never",
    "hover" = "hover"
}
export declare const CardProps: {
    header: {
        type: StringConstructor;
    };
    footer: {
        type: StringConstructor;
    };
    "body-style": {
        type: PropType<StyleValue>;
    };
    "header-class": {
        type: StringConstructor;
    };
    "body-class": {
        type: StringConstructor;
    };
    "footer-class": {
        type: StringConstructor;
    };
    shadow: {
        type: PropType<Shadow>;
        default: string;
    };
};
export type CardPropsType = ExtractPropTypes<typeof CardProps>;
