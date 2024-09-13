import type { Plugin } from "vue";
export type SFCwidthInstall<T> = T & Plugin;
declare const Button: SFCwidthInstall<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
export { Button };
export default Button;
declare module "vue" {
    interface GlobalComponents {
        Button: typeof Button;
    }
}
