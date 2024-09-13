import type { Plugin } from "vue";
export type SFCwidthInstall<T> = T & Plugin;
declare const ElCol: SFCwidthInstall<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
export { ElCol };
export default ElCol;
declare module "vue" {
    interface GlobalComponents {
        ElCol: typeof ElCol;
    }
}
