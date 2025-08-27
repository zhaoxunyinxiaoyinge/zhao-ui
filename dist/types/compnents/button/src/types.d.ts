import type { PropType, ExtractPropTypes } from 'vue';
export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'large' | 'default' | 'small';
export declare const getPassProps: {
    readonly tag: {
        readonly type: PropType<"button" | "a" | "div">;
        readonly default: "button";
    };
    readonly type: {
        readonly type: PropType<ButtonType>;
        readonly default: "default";
        readonly validator: (val: string) => boolean;
    };
    readonly size: {
        readonly type: PropType<ButtonSize>;
        readonly default: "default";
        readonly validator: (val: string) => boolean;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
};
export type ButtonProps = ExtractPropTypes<typeof getPassProps>;
export type ButtonEmits = {
    click: (evt: MouseEvent) => void;
};
