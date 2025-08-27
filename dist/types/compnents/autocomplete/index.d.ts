import type { Plugin } from 'vue';
import Autocomplete from './src/index.vue';
export type ButtonInstance = InstanceType<typeof Autocomplete>;
export type SFCWithInstall<T> = T & Plugin;
export type { AutocompleteProps } from './src/types';
declare const ZAutocomplete: SFCWithInstall<typeof Autocomplete>;
export { ZAutocomplete };
export default ZAutocomplete;
