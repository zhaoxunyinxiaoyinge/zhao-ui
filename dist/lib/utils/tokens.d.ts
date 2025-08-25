import type { ComputedRef, InjectionKey } from "vue";
import type { I18n } from "vue-i18n";
interface InjectionKeyRow {
    gutter: ComputedRef<number>;
}
declare enum Lang {
    "zh" = "zh-cn",
    "en" = "en"
}
type langObject = {
    [key in Lang]?: {
        messges: Record<string, any>;
    };
};
interface GlobalConfig {
    size?: string;
    zIndex?: number;
    local?: langObject;
    il18n?: I18n;
}
interface InjectionConfig {
    local?: langObject;
    size: string;
    zIndex: number;
}
declare const rowContextKey: InjectionKey<InjectionKeyRow>;
declare const configKey: InjectionKey<InjectionConfig>;
declare const globalconfig: InjectionKey<GlobalConfig>;
export { rowContextKey, configKey, globalconfig, };
export type { InjectionKeyRow, InjectionConfig, GlobalConfig, langObject };
