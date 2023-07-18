import type {ComputedRef,InjectionKey} from "vue";
 interface InjectionKeyRow {
  gutter:ComputedRef<number>
};

 const rowContextKey:InjectionKey<InjectionKeyRow>=Symbol("rowContextKey");
 export {
  rowContextKey
 }
 export  type{
  InjectionKeyRow
 }


