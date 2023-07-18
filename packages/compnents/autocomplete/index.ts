import Autocomplete from "./src/index.vue";
import type { App, Plugin, Component } from "vue";

type SFCwidthInstall<T> = T & Plugin;

const withInstall = <T>(com: T) => {
    (com as SFCwidthInstall<T>).install = function (app: App) {
        app.component((com as any)?.name, com as Component)
    }
    return com as SFCwidthInstall<T>
}

const ElAutocomplete = withInstall(Autocomplete);
export {
    ElAutocomplete
}
export default ElAutocomplete;

declare module  "vue" {
    export interface GlobalComponents {
        ElAutocompleteType:typeof ElAutocomplete
    }
}