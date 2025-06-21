import type { PropType, ExtractPropTypes } from 'vue';
export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type ButtonSize = 'large' | 'default' | 'small';
export declare const getPassProps: {
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
    readonly disabled: BooleanConstructor;
};
export type ButtonProps = ExtractPropTypes<typeof getPassProps>;
export type ButtonEmits = {
    click: (evt: MouseEvent) => void;
};
