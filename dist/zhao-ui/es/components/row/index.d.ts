import type { Plugin } from "vue";
export type SFCwidthInstall<T> = T & Plugin;
declare const ElRow: SFCwidthInstall<import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>>;
export { ElRow };
export default ElRow;
declare module "vue" {
    interface GlobalComponents {
        ElRow: typeof ElRow;
    }
}
