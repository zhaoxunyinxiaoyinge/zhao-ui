import { Component, Directive } from "vue";
import { ZButton, ZIcon, ZLink, ZCard, ZInput, ZTooltip, ZSpace, ZStart, ZText, ZRow, ZCol, ZScrollBarBar, ZAutocomplete, ZInputNumber, ZButtonGroup } from "../dist/types/compnents";

declare module "vue"{
    export interface GlobalComponents {
        ZButton: typeof ZButton;
        ZIcon: typeof ZIcon;
        ZLink: typeof ZLink;
        ZCard: typeof ZCard;
        ZInput: typeof ZInput;
        ZTooltip: typeof ZTooltip;
        ZSpace: typeof ZSpace;
        ZStart: typeof ZStart;
        ZText: typeof ZText;
        ZRow: typeof ZRow;
        ZCol: typeof ZCol;
        ZScrollBarBar: typeof ZScrollBarBar;
        ZAutocomplete: typeof ZAutocomplete;
        ZInputNumber: typeof ZInputNumber;
        ZButtonGroup: typeof ZButtonGroup;
        [key: string]: Component< any, any, any, any, any, any, any>;
    }

    export interface GlobalDirectives{
        [key: string]: Directive<any, any, any, any>;
    }
}

export {};