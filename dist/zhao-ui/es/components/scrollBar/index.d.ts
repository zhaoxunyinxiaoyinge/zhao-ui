import type { Plugin } from "vue";
type SFCwidthInstall<T> = T & Plugin;
declare const ScrollBar: SFCwidthInstall<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
export { ScrollBar };
export default ScrollBar;
declare module "vue" {
    interface GlobalComponents {
        ZScrollBar: typeof ScrollBar;
    }
}
