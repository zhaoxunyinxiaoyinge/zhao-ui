import type { PropType, ExtractPropTypes } from 'vue';
declare enum size {
    large = "large",
    medium = "medium",
    small = "small"
}
declare enum type {
    default = "default",
    primary = "primary",
    success = "success",
    warning = "warning",
    danger = "danger",
    info = "info"
}
export declare const getPassProps: {
    readonly type: {
        readonly type: PropType<type>;
        readonly default: type.default;
        readonly validator: (val: string) => boolean;
    };
    readonly size: {
        readonly type: PropType<size>;
        readonly default: size.medium;
        readonly validator: (val: string) => boolean;
    };
};
export type ButtonGroupProps = ExtractPropTypes<typeof getPassProps>;
export {};
