import type { ComputedRef, InjectionKey } from "vue";
interface InjectionKeyRow {
    gutter: ComputedRef<number>;
}
declare const rowContextKey: InjectionKey<InjectionKeyRow>;
export { rowContextKey };
export type { InjectionKeyRow };
