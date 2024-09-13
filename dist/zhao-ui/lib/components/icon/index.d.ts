import type { Plugin } from "vue";
type SFCwidthInstall<T> = T & Plugin;
declare const ZIcon: SFCwidthInstall<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
export { ZIcon };
export default ZIcon;
declare module "vue" {
    interface GlobalComponents {
        ZIcons: typeof ZIcon;
    }
}
