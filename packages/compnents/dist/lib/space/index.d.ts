import type { Plugin } from "vue";
type SFCwidthInstall<T> = T & Plugin;
declare const ElSpace: SFCwidthInstall<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
export { ElSpace };
export default ElSpace;
declare module "vue" {
    interface GlobalComponents {
        ZElSpace: typeof ElSpace;
    }
}
