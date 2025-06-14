import type {ZButton,ZAutocomplete,ZCard,ZCol,ZInput,ZInputNumber,ZLink,ZSpace,ZScrollBarBar,ZRow,ZTooltip,ZText,ZStart} from "."
declare module "vue" {
  export interface GlobalComponents {
    ZButton:typeof ZButton;
    ZAutocomplete:typeof ZAutocomplete;
    ZCard:typeof ZCard;
    ZCol:typeof ZCol;
    ZInput:typeof ZInput;
    ZInputNumber:typeof ZInputNumber;
    ZLink:typeof ZLink;
    ZSpace:typeof ZSpace;
    ZScrollBarBar:typeof ZScrollBarBar;
    ZRow:typeof ZRow;
    ZTooltip:typeof ZTooltip;
    ZText:typeof ZText 
    ZStart:typeof ZStart
  }
}