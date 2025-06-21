import type { App, Component } from 'vue';
import { ZButton, type ButtonProps, type ButtonInstance } from './button';
import { ZIcon, type IconInstance, type IconProps } from './icon';
import { ZLink, type LinkInstance, type LinkProps } from './link';
import { ZCard, type CardInstance, type CardProps } from './card';
import { ZInput, type inputTypes, type ZInputInstance } from './input';
import { ZInputNumber, type ZInputNumberInstance, type inputNumberTypes } from './inputNmuber';
import { ZTooltip, type TooltipInstance, type TooltipProps } from './tooltip';
import { ZSpace, type SpaceInstance, type SpaceProps } from './space';
import { ZStart, type StartInstance, type StartProps } from './start';
import { ZText, type TextInstance, textType } from './text';
import { ZRow, type RowInstance, type RowProps } from './row';
import { ZCol, type ColInstance, type ColProps } from './col';
import { ZScrollBarBar, type ScrollBarInstance, type ScrollbarProps } from './scrollBar';
import { ZAutocomplete } from './autocomplete';
export type { ButtonInstance, ButtonProps, CardInstance, CardProps, ColInstance, ColProps, IconInstance, IconProps, ZInputInstance, inputTypes, ZInputNumberInstance, inputNumberTypes, LinkInstance, LinkProps, RowInstance, RowProps, ScrollBarInstance, ScrollbarProps, SpaceInstance, SpaceProps, TooltipInstance, TooltipProps, StartInstance, StartProps, textType, TextInstance };
export declare const components: (({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("./button/src/types").ButtonType>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("./button/src/types").ButtonSize>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly icon: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly disabled: BooleanConstructor;
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly type: {
                readonly type: import("vue").PropType<import("./button/src/types").ButtonType>;
                readonly default: "default";
                readonly validator: (val: string) => boolean;
            };
            readonly size: {
                readonly type: import("vue").PropType<import("./button/src/types").ButtonSize>;
                readonly default: "default";
                readonly validator: (val: string) => boolean;
            };
            readonly icon: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly disabled: BooleanConstructor;
        }>> & Readonly<{}> & {}>;
        isplain: import("vue").Ref<boolean, boolean>;
        isCirle: import("vue").Ref<boolean, boolean>;
        isRound: import("vue").Ref<boolean, boolean>;
        isLoading: import("vue").Ref<boolean, boolean>;
        ref: import("vue").Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
        size: import("vue").Ref<string | undefined, string | undefined>;
        type: import("vue").Ref<string | undefined, string | undefined>;
        disabled: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly type: import("./button/src/types").ButtonType;
        readonly size: import("./button/src/types").ButtonSize;
        readonly icon: string;
        readonly disabled: boolean;
    }, true, {}, {}, {
        icon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            icon: {
                type: StringConstructor;
                require: boolean;
                default: string;
                value: string;
            };
        }>, {
            props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                icon: {
                    type: StringConstructor;
                    require: boolean;
                    default: string;
                    value: string;
                };
            }>> & Readonly<{}> & {}>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            icon: {
                type: StringConstructor;
                require: boolean;
                default: string;
                value: string;
            };
        }>> & Readonly<{}>, {
            icon: string;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Loading: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("./button/src/types").ButtonType>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("./button/src/types").ButtonSize>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly icon: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly disabled: BooleanConstructor;
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly type: {
                readonly type: import("vue").PropType<import("./button/src/types").ButtonType>;
                readonly default: "default";
                readonly validator: (val: string) => boolean;
            };
            readonly size: {
                readonly type: import("vue").PropType<import("./button/src/types").ButtonSize>;
                readonly default: "default";
                readonly validator: (val: string) => boolean;
            };
            readonly icon: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly disabled: BooleanConstructor;
        }>> & Readonly<{}> & {}>;
        isplain: import("vue").Ref<boolean, boolean>;
        isCirle: import("vue").Ref<boolean, boolean>;
        isRound: import("vue").Ref<boolean, boolean>;
        isLoading: import("vue").Ref<boolean, boolean>;
        ref: import("vue").Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
        size: import("vue").Ref<string | undefined, string | undefined>;
        type: import("vue").Ref<string | undefined, string | undefined>;
        disabled: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, {
        readonly type: import("./button/src/types").ButtonType;
        readonly size: import("./button/src/types").ButtonSize;
        readonly icon: string;
        readonly disabled: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("./button/src/types").ButtonType>;
        readonly default: "default";
        readonly validator: (val: string) => boolean;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./button/src/types").ButtonSize>;
        readonly default: "default";
        readonly validator: (val: string) => boolean;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: BooleanConstructor;
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("./button/src/types").ButtonType>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("./button/src/types").ButtonSize>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly icon: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly disabled: BooleanConstructor;
    }>> & Readonly<{}> & {}>;
    isplain: import("vue").Ref<boolean, boolean>;
    isCirle: import("vue").Ref<boolean, boolean>;
    isRound: import("vue").Ref<boolean, boolean>;
    isLoading: import("vue").Ref<boolean, boolean>;
    ref: import("vue").Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
    size: import("vue").Ref<string | undefined, string | undefined>;
    type: import("vue").Ref<string | undefined, string | undefined>;
    disabled: import("vue").ComputedRef<boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly type: import("./button/src/types").ButtonType;
    readonly size: import("./button/src/types").ButtonSize;
    readonly icon: string;
    readonly disabled: boolean;
}, {}, string, {}, {
    icon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            require: boolean;
            default: string;
            value: string;
        };
    }>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            icon: {
                type: StringConstructor;
                require: boolean;
                default: string;
                value: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            require: boolean;
            default: string;
            value: string;
        };
    }>> & Readonly<{}>, {
        icon: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Loading: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("./button/src/types").ButtonType>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("./button/src/types").ButtonSize>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly icon: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly disabled: BooleanConstructor;
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly type: {
                readonly type: import("vue").PropType<import("./button/src/types").ButtonType>;
                readonly default: "default";
                readonly validator: (val: string) => boolean;
            };
            readonly size: {
                readonly type: import("vue").PropType<import("./button/src/types").ButtonSize>;
                readonly default: "default";
                readonly validator: (val: string) => boolean;
            };
            readonly icon: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly disabled: BooleanConstructor;
        }>> & Readonly<{}> & {}>;
        isplain: import("vue").Ref<boolean, boolean>;
        isCirle: import("vue").Ref<boolean, boolean>;
        isRound: import("vue").Ref<boolean, boolean>;
        isLoading: import("vue").Ref<boolean, boolean>;
        ref: import("vue").Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
        size: import("vue").Ref<string | undefined, string | undefined>;
        type: import("vue").Ref<string | undefined, string | undefined>;
        disabled: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly type: import("./button/src/types").ButtonType;
        readonly size: import("./button/src/types").ButtonSize;
        readonly icon: string;
        readonly disabled: boolean;
    }, true, {}, {}, {
        icon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            icon: {
                type: StringConstructor;
                require: boolean;
                default: string;
                value: string;
            };
        }>, {
            props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                icon: {
                    type: StringConstructor;
                    require: boolean;
                    default: string;
                    value: string;
                };
            }>> & Readonly<{}> & {}>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            icon: {
                type: StringConstructor;
                require: boolean;
                default: string;
                value: string;
            };
        }>> & Readonly<{}>, {
            icon: string;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        Loading: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    } & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("./button/src/types").ButtonType>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("./button/src/types").ButtonSize>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly icon: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly disabled: BooleanConstructor;
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly type: {
                readonly type: import("vue").PropType<import("./button/src/types").ButtonType>;
                readonly default: "default";
                readonly validator: (val: string) => boolean;
            };
            readonly size: {
                readonly type: import("vue").PropType<import("./button/src/types").ButtonSize>;
                readonly default: "default";
                readonly validator: (val: string) => boolean;
            };
            readonly icon: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly disabled: BooleanConstructor;
        }>> & Readonly<{}> & {}>;
        isplain: import("vue").Ref<boolean, boolean>;
        isCirle: import("vue").Ref<boolean, boolean>;
        isRound: import("vue").Ref<boolean, boolean>;
        isLoading: import("vue").Ref<boolean, boolean>;
        ref: import("vue").Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
        size: import("vue").Ref<string | undefined, string | undefined>;
        type: import("vue").Ref<string | undefined, string | undefined>;
        disabled: import("vue").ComputedRef<boolean>;
    }, {}, {}, {}, {
        readonly type: import("./button/src/types").ButtonType;
        readonly size: import("./button/src/types").ButtonSize;
        readonly icon: string;
        readonly disabled: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: import("vue").PropType<import("./button/src/types").ButtonType>;
        readonly default: "default";
        readonly validator: (val: string) => boolean;
    };
    readonly size: {
        readonly type: import("vue").PropType<import("./button/src/types").ButtonSize>;
        readonly default: "default";
        readonly validator: (val: string) => boolean;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly disabled: BooleanConstructor;
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly type: {
            readonly type: import("vue").PropType<import("./button/src/types").ButtonType>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly size: {
            readonly type: import("vue").PropType<import("./button/src/types").ButtonSize>;
            readonly default: "default";
            readonly validator: (val: string) => boolean;
        };
        readonly icon: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly disabled: BooleanConstructor;
    }>> & Readonly<{}> & {}>;
    isplain: import("vue").Ref<boolean, boolean>;
    isCirle: import("vue").Ref<boolean, boolean>;
    isRound: import("vue").Ref<boolean, boolean>;
    isLoading: import("vue").Ref<boolean, boolean>;
    ref: import("vue").Ref<HTMLButtonElement | undefined, HTMLButtonElement | undefined>;
    size: import("vue").Ref<string | undefined, string | undefined>;
    type: import("vue").Ref<string | undefined, string | undefined>;
    disabled: import("vue").ComputedRef<boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly type: import("./button/src/types").ButtonType;
    readonly size: import("./button/src/types").ButtonSize;
    readonly icon: string;
    readonly disabled: boolean;
}, {}, string, {}, {
    icon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            require: boolean;
            default: string;
            value: string;
        };
    }>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            icon: {
                type: StringConstructor;
                require: boolean;
                default: string;
                value: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            require: boolean;
            default: string;
            value: string;
        };
    }>> & Readonly<{}>, {
        icon: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Loading: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
} & import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            require: boolean;
            default: string;
            value: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            icon: {
                type: StringConstructor;
                require: boolean;
                default: string;
                value: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        icon: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            require: boolean;
            default: string;
            value: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            icon: {
                type: StringConstructor;
                require: boolean;
                default: string;
                value: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, {
        icon: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        require: boolean;
        default: string;
        value: string;
    };
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            require: boolean;
            default: string;
            value: string;
        };
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    icon: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            require: boolean;
            default: string;
            value: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            icon: {
                type: StringConstructor;
                require: boolean;
                default: string;
                value: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        icon: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            require: boolean;
            default: string;
            value: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            icon: {
                type: StringConstructor;
                require: boolean;
                default: string;
                value: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, {
        icon: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    icon: {
        type: StringConstructor;
        require: boolean;
        default: string;
        value: string;
    };
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        icon: {
            type: StringConstructor;
            require: boolean;
            default: string;
            value: string;
        };
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    icon: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        shadow: {
            type: StringConstructor;
            default: string;
            required: boolean;
        };
        bodyStyle: {
            type: import("vue").PropType<object>;
            default: {};
            required: boolean;
        };
    }>> & Readonly<{}>, {
        classes: import("vue").ComputedRef<string[]>;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        header: import("vue").Slot<any> | undefined;
        bodyStyle: import("vue").ComputedRef<import("vue").StyleValue>;
        body: import("vue").Slot<any> | undefined;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        shadow: string;
        bodyStyle: object;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        shadow: {
            type: StringConstructor;
            default: string;
            required: boolean;
        };
        bodyStyle: {
            type: import("vue").PropType<object>;
            default: {};
            required: boolean;
        };
    }>> & Readonly<{}>, {
        classes: import("vue").ComputedRef<string[]>;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        header: import("vue").Slot<any> | undefined;
        bodyStyle: import("vue").ComputedRef<import("vue").StyleValue>;
        body: import("vue").Slot<any> | undefined;
    }, {}, {}, {}, {
        shadow: string;
        bodyStyle: object;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    shadow: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    bodyStyle: {
        type: import("vue").PropType<object>;
        default: {};
        required: boolean;
    };
}>> & Readonly<{}>, {
    classes: import("vue").ComputedRef<string[]>;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    header: import("vue").Slot<any> | undefined;
    bodyStyle: import("vue").ComputedRef<import("vue").StyleValue>;
    body: import("vue").Slot<any> | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    shadow: string;
    bodyStyle: object;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        shadow: {
            type: StringConstructor;
            default: string;
            required: boolean;
        };
        bodyStyle: {
            type: import("vue").PropType<object>;
            default: {};
            required: boolean;
        };
    }>> & Readonly<{}>, {
        classes: import("vue").ComputedRef<string[]>;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        header: import("vue").Slot<any> | undefined;
        bodyStyle: import("vue").ComputedRef<import("vue").StyleValue>;
        body: import("vue").Slot<any> | undefined;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        shadow: string;
        bodyStyle: object;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        shadow: {
            type: StringConstructor;
            default: string;
            required: boolean;
        };
        bodyStyle: {
            type: import("vue").PropType<object>;
            default: {};
            required: boolean;
        };
    }>> & Readonly<{}>, {
        classes: import("vue").ComputedRef<string[]>;
        slots: Readonly<{
            [name: string]: import("vue").Slot<any> | undefined;
        }>;
        header: import("vue").Slot<any> | undefined;
        bodyStyle: import("vue").ComputedRef<import("vue").StyleValue>;
        body: import("vue").Slot<any> | undefined;
    }, {}, {}, {}, {
        shadow: string;
        bodyStyle: object;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    shadow: {
        type: StringConstructor;
        default: string;
        required: boolean;
    };
    bodyStyle: {
        type: import("vue").PropType<object>;
        default: {};
        required: boolean;
    };
}>> & Readonly<{}>, {
    classes: import("vue").ComputedRef<string[]>;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    header: import("vue").Slot<any> | undefined;
    bodyStyle: import("vue").ComputedRef<import("vue").StyleValue>;
    body: import("vue").Slot<any> | undefined;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    shadow: string;
    bodyStyle: object;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPassWord: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<number | string>;
            default: string;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        rows: {
            type: NumberConstructor;
            default: number;
        };
        prefixIcon: {
            type: StringConstructor;
            default: string;
        };
        suffixIcon: {
            type: StringConstructor;
            default: string;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxlength: {
            type: NumberConstructor;
            default: number;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        "input-style": {
            type: import("vue").PropType<{
                [propName: string]: any;
            } | string>;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: StringConstructor;
                default: string;
            };
            placeholder: {
                type: StringConstructor;
                default: string;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPassWord: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: import("vue").PropType<number | string>;
                default: string;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            rows: {
                type: NumberConstructor;
                default: number;
            };
            prefixIcon: {
                type: StringConstructor;
                default: string;
            };
            suffixIcon: {
                type: StringConstructor;
                default: string;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxlength: {
                type: NumberConstructor;
                default: number;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            "input-style": {
                type: import("vue").PropType<{
                    [propName: string]: any;
                } | string>;
            };
            size: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: string;
        size: string;
        disabled: boolean;
        name: string;
        placeholder: string;
        clearable: boolean;
        showPassWord: boolean;
        modelValue: string | number;
        readonly: boolean;
        rows: number;
        prefixIcon: string;
        suffixIcon: string;
        showWordLimit: boolean;
        maxlength: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPassWord: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<number | string>;
            default: string;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        rows: {
            type: NumberConstructor;
            default: number;
        };
        prefixIcon: {
            type: StringConstructor;
            default: string;
        };
        suffixIcon: {
            type: StringConstructor;
            default: string;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxlength: {
            type: NumberConstructor;
            default: number;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        "input-style": {
            type: import("vue").PropType<{
                [propName: string]: any;
            } | string>;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: StringConstructor;
                default: string;
            };
            placeholder: {
                type: StringConstructor;
                default: string;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPassWord: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: import("vue").PropType<number | string>;
                default: string;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            rows: {
                type: NumberConstructor;
                default: number;
            };
            prefixIcon: {
                type: StringConstructor;
                default: string;
            };
            suffixIcon: {
                type: StringConstructor;
                default: string;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxlength: {
                type: NumberConstructor;
                default: number;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            "input-style": {
                type: import("vue").PropType<{
                    [propName: string]: any;
                } | string>;
            };
            size: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, {
        type: string;
        size: string;
        disabled: boolean;
        name: string;
        placeholder: string;
        clearable: boolean;
        showPassWord: boolean;
        modelValue: string | number;
        readonly: boolean;
        rows: number;
        prefixIcon: string;
        suffixIcon: string;
        showWordLimit: boolean;
        maxlength: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassWord: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<number | string>;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    suffixIcon: {
        type: StringConstructor;
        default: string;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    "input-style": {
        type: import("vue").PropType<{
            [propName: string]: any;
        } | string>;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPassWord: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<number | string>;
            default: string;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        rows: {
            type: NumberConstructor;
            default: number;
        };
        prefixIcon: {
            type: StringConstructor;
            default: string;
        };
        suffixIcon: {
            type: StringConstructor;
            default: string;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxlength: {
            type: NumberConstructor;
            default: number;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        "input-style": {
            type: import("vue").PropType<{
                [propName: string]: any;
            } | string>;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: string;
    size: string;
    disabled: boolean;
    name: string;
    placeholder: string;
    clearable: boolean;
    showPassWord: boolean;
    modelValue: string | number;
    readonly: boolean;
    rows: number;
    prefixIcon: string;
    suffixIcon: string;
    showWordLimit: boolean;
    maxlength: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPassWord: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<number | string>;
            default: string;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        rows: {
            type: NumberConstructor;
            default: number;
        };
        prefixIcon: {
            type: StringConstructor;
            default: string;
        };
        suffixIcon: {
            type: StringConstructor;
            default: string;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxlength: {
            type: NumberConstructor;
            default: number;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        "input-style": {
            type: import("vue").PropType<{
                [propName: string]: any;
            } | string>;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: StringConstructor;
                default: string;
            };
            placeholder: {
                type: StringConstructor;
                default: string;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPassWord: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: import("vue").PropType<number | string>;
                default: string;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            rows: {
                type: NumberConstructor;
                default: number;
            };
            prefixIcon: {
                type: StringConstructor;
                default: string;
            };
            suffixIcon: {
                type: StringConstructor;
                default: string;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxlength: {
                type: NumberConstructor;
                default: number;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            "input-style": {
                type: import("vue").PropType<{
                    [propName: string]: any;
                } | string>;
            };
            size: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: string;
        size: string;
        disabled: boolean;
        name: string;
        placeholder: string;
        clearable: boolean;
        showPassWord: boolean;
        modelValue: string | number;
        readonly: boolean;
        rows: number;
        prefixIcon: string;
        suffixIcon: string;
        showWordLimit: boolean;
        maxlength: number;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPassWord: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<number | string>;
            default: string;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        rows: {
            type: NumberConstructor;
            default: number;
        };
        prefixIcon: {
            type: StringConstructor;
            default: string;
        };
        suffixIcon: {
            type: StringConstructor;
            default: string;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxlength: {
            type: NumberConstructor;
            default: number;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        "input-style": {
            type: import("vue").PropType<{
                [propName: string]: any;
            } | string>;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: StringConstructor;
                default: string;
            };
            placeholder: {
                type: StringConstructor;
                default: string;
            };
            clearable: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPassWord: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            modelValue: {
                type: import("vue").PropType<number | string>;
                default: string;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            rows: {
                type: NumberConstructor;
                default: number;
            };
            prefixIcon: {
                type: StringConstructor;
                default: string;
            };
            suffixIcon: {
                type: StringConstructor;
                default: string;
            };
            showWordLimit: {
                type: BooleanConstructor;
                default: boolean;
            };
            maxlength: {
                type: NumberConstructor;
                default: number;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            "input-style": {
                type: import("vue").PropType<{
                    [propName: string]: any;
                } | string>;
            };
            size: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, {
        type: string;
        size: string;
        disabled: boolean;
        name: string;
        placeholder: string;
        clearable: boolean;
        showPassWord: boolean;
        modelValue: string | number;
        readonly: boolean;
        rows: number;
        prefixIcon: string;
        suffixIcon: string;
        showWordLimit: boolean;
        maxlength: number;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassWord: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: import("vue").PropType<number | string>;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    suffixIcon: {
        type: StringConstructor;
        default: string;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxlength: {
        type: NumberConstructor;
        default: number;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    "input-style": {
        type: import("vue").PropType<{
            [propName: string]: any;
        } | string>;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPassWord: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        modelValue: {
            type: import("vue").PropType<number | string>;
            default: string;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        rows: {
            type: NumberConstructor;
            default: number;
        };
        prefixIcon: {
            type: StringConstructor;
            default: string;
        };
        suffixIcon: {
            type: StringConstructor;
            default: string;
        };
        showWordLimit: {
            type: BooleanConstructor;
            default: boolean;
        };
        maxlength: {
            type: NumberConstructor;
            default: number;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        "input-style": {
            type: import("vue").PropType<{
                [propName: string]: any;
            } | string>;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: string;
    size: string;
    disabled: boolean;
    name: string;
    placeholder: string;
    clearable: boolean;
    showPassWord: boolean;
    modelValue: string | number;
    readonly: boolean;
    rows: number;
    prefixIcon: string;
    suffixIcon: string;
    showWordLimit: boolean;
    maxlength: number;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        min: {
            type: NumberConstructor;
            default: number;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
        };
        "step-strictly": {
            type: BooleanConstructor;
            default: boolean;
        };
        precision: {
            type: NumberConstructor;
            default: number;
        };
        size: {
            type: StringConstructor;
            default: import("vue").PropType<"small" | "default" | "large">;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        controls: {
            type: BooleanConstructor;
            default: boolean;
        };
        "controls-position": {
            type: StringConstructor;
            default: import("vue").PropType<"" | "right">;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        id: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            min: {
                type: NumberConstructor;
                default: number;
            };
            max: {
                type: NumberConstructor;
                default: number;
            };
            step: {
                type: NumberConstructor;
                default: number;
            };
            "step-strictly": {
                type: BooleanConstructor;
                default: boolean;
            };
            precision: {
                type: NumberConstructor;
                default: number;
            };
            size: {
                type: StringConstructor;
                default: import("vue").PropType<"small" | "default" | "large">;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            controls: {
                type: BooleanConstructor;
                default: boolean;
            };
            "controls-position": {
                type: StringConstructor;
                default: import("vue").PropType<"" | "right">;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            placeholder: {
                type: StringConstructor;
                default: string;
            };
            id: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: string;
        disabled: boolean;
        name: string;
        placeholder: string;
        readonly: boolean;
        min: number;
        max: number;
        step: number;
        "step-strictly": boolean;
        precision: number;
        controls: boolean;
        "controls-position": string;
        id: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        min: {
            type: NumberConstructor;
            default: number;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
        };
        "step-strictly": {
            type: BooleanConstructor;
            default: boolean;
        };
        precision: {
            type: NumberConstructor;
            default: number;
        };
        size: {
            type: StringConstructor;
            default: import("vue").PropType<"small" | "default" | "large">;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        controls: {
            type: BooleanConstructor;
            default: boolean;
        };
        "controls-position": {
            type: StringConstructor;
            default: import("vue").PropType<"" | "right">;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        id: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            min: {
                type: NumberConstructor;
                default: number;
            };
            max: {
                type: NumberConstructor;
                default: number;
            };
            step: {
                type: NumberConstructor;
                default: number;
            };
            "step-strictly": {
                type: BooleanConstructor;
                default: boolean;
            };
            precision: {
                type: NumberConstructor;
                default: number;
            };
            size: {
                type: StringConstructor;
                default: import("vue").PropType<"small" | "default" | "large">;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            controls: {
                type: BooleanConstructor;
                default: boolean;
            };
            "controls-position": {
                type: StringConstructor;
                default: import("vue").PropType<"" | "right">;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            placeholder: {
                type: StringConstructor;
                default: string;
            };
            id: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, {
        size: string;
        disabled: boolean;
        name: string;
        placeholder: string;
        readonly: boolean;
        min: number;
        max: number;
        step: number;
        "step-strictly": boolean;
        precision: number;
        controls: boolean;
        "controls-position": string;
        id: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    "step-strictly": {
        type: BooleanConstructor;
        default: boolean;
    };
    precision: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: StringConstructor;
        default: import("vue").PropType<"small" | "default" | "large">;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
    "controls-position": {
        type: StringConstructor;
        default: import("vue").PropType<"" | "right">;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        min: {
            type: NumberConstructor;
            default: number;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
        };
        "step-strictly": {
            type: BooleanConstructor;
            default: boolean;
        };
        precision: {
            type: NumberConstructor;
            default: number;
        };
        size: {
            type: StringConstructor;
            default: import("vue").PropType<"small" | "default" | "large">;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        controls: {
            type: BooleanConstructor;
            default: boolean;
        };
        "controls-position": {
            type: StringConstructor;
            default: import("vue").PropType<"" | "right">;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        id: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: string;
    disabled: boolean;
    name: string;
    placeholder: string;
    readonly: boolean;
    min: number;
    max: number;
    step: number;
    "step-strictly": boolean;
    precision: number;
    controls: boolean;
    "controls-position": string;
    id: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        min: {
            type: NumberConstructor;
            default: number;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
        };
        "step-strictly": {
            type: BooleanConstructor;
            default: boolean;
        };
        precision: {
            type: NumberConstructor;
            default: number;
        };
        size: {
            type: StringConstructor;
            default: import("vue").PropType<"small" | "default" | "large">;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        controls: {
            type: BooleanConstructor;
            default: boolean;
        };
        "controls-position": {
            type: StringConstructor;
            default: import("vue").PropType<"" | "right">;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        id: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            min: {
                type: NumberConstructor;
                default: number;
            };
            max: {
                type: NumberConstructor;
                default: number;
            };
            step: {
                type: NumberConstructor;
                default: number;
            };
            "step-strictly": {
                type: BooleanConstructor;
                default: boolean;
            };
            precision: {
                type: NumberConstructor;
                default: number;
            };
            size: {
                type: StringConstructor;
                default: import("vue").PropType<"small" | "default" | "large">;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            controls: {
                type: BooleanConstructor;
                default: boolean;
            };
            "controls-position": {
                type: StringConstructor;
                default: import("vue").PropType<"" | "right">;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            placeholder: {
                type: StringConstructor;
                default: string;
            };
            id: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: string;
        disabled: boolean;
        name: string;
        placeholder: string;
        readonly: boolean;
        min: number;
        max: number;
        step: number;
        "step-strictly": boolean;
        precision: number;
        controls: boolean;
        "controls-position": string;
        id: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        min: {
            type: NumberConstructor;
            default: number;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
        };
        "step-strictly": {
            type: BooleanConstructor;
            default: boolean;
        };
        precision: {
            type: NumberConstructor;
            default: number;
        };
        size: {
            type: StringConstructor;
            default: import("vue").PropType<"small" | "default" | "large">;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        controls: {
            type: BooleanConstructor;
            default: boolean;
        };
        "controls-position": {
            type: StringConstructor;
            default: import("vue").PropType<"" | "right">;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        id: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            min: {
                type: NumberConstructor;
                default: number;
            };
            max: {
                type: NumberConstructor;
                default: number;
            };
            step: {
                type: NumberConstructor;
                default: number;
            };
            "step-strictly": {
                type: BooleanConstructor;
                default: boolean;
            };
            precision: {
                type: NumberConstructor;
                default: number;
            };
            size: {
                type: StringConstructor;
                default: import("vue").PropType<"small" | "default" | "large">;
            };
            readonly: {
                type: BooleanConstructor;
                default: boolean;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            controls: {
                type: BooleanConstructor;
                default: boolean;
            };
            "controls-position": {
                type: StringConstructor;
                default: import("vue").PropType<"" | "right">;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            placeholder: {
                type: StringConstructor;
                default: string;
            };
            id: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, {
        size: string;
        disabled: boolean;
        name: string;
        placeholder: string;
        readonly: boolean;
        min: number;
        max: number;
        step: number;
        "step-strictly": boolean;
        precision: number;
        controls: boolean;
        "controls-position": string;
        id: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    min: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    step: {
        type: NumberConstructor;
        default: number;
    };
    "step-strictly": {
        type: BooleanConstructor;
        default: boolean;
    };
    precision: {
        type: NumberConstructor;
        default: number;
    };
    size: {
        type: StringConstructor;
        default: import("vue").PropType<"small" | "default" | "large">;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
    "controls-position": {
        type: StringConstructor;
        default: import("vue").PropType<"" | "right">;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        min: {
            type: NumberConstructor;
            default: number;
        };
        max: {
            type: NumberConstructor;
            default: number;
        };
        step: {
            type: NumberConstructor;
            default: number;
        };
        "step-strictly": {
            type: BooleanConstructor;
            default: boolean;
        };
        precision: {
            type: NumberConstructor;
            default: number;
        };
        size: {
            type: StringConstructor;
            default: import("vue").PropType<"small" | "default" | "large">;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        controls: {
            type: BooleanConstructor;
            default: boolean;
        };
        "controls-position": {
            type: StringConstructor;
            default: import("vue").PropType<"" | "right">;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        id: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: string;
    disabled: boolean;
    name: string;
    placeholder: string;
    readonly: boolean;
    min: number;
    max: number;
    step: number;
    "step-strictly": boolean;
    precision: number;
    controls: boolean;
    "controls-position": string;
    id: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        trigger: {
            type: StringConstructor;
            default: string;
        };
        placement: {
            type: StringConstructor;
            default: string;
        };
        content: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        trigger: string;
        placement: string;
        content: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        trigger: {
            type: StringConstructor;
            default: string;
        };
        placement: {
            type: StringConstructor;
            default: string;
        };
        content: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        trigger: string;
        placement: string;
        content: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    trigger: {
        type: StringConstructor;
        default: string;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    trigger: string;
    placement: string;
    content: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        trigger: {
            type: StringConstructor;
            default: string;
        };
        placement: {
            type: StringConstructor;
            default: string;
        };
        content: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        trigger: string;
        placement: string;
        content: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        trigger: {
            type: StringConstructor;
            default: string;
        };
        placement: {
            type: StringConstructor;
            default: string;
        };
        content: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        trigger: string;
        placement: string;
        content: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    trigger: {
        type: StringConstructor;
        default: string;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    trigger: string;
    placement: string;
    content: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        alignment: {
            type: import("vue").PropType<keyof import("./space/src/types").alignment>;
            default: string;
            required: boolean;
        };
        class: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
        direction: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
        style: {
            type: import("vue").PropType<import("./space/src/types").alignment>;
            default: string;
            required: boolean;
        };
        size: {
            type: import("vue").PropType<Array<number>>;
            default: string;
            required: boolean;
        };
        wrap: {
            type: import("vue").PropType<boolean>;
            default: boolean;
            required: boolean;
        };
        fill: {
            type: import("vue").PropType<boolean>;
            default: boolean;
            required: boolean;
        };
        fillRatio: {
            type: import("vue").PropType<number>;
            default: number;
            required: boolean;
        };
        prefixCls: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
    }>> & Readonly<{}>, {
        className: import("vue").ComputedRef<string[]>;
        containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
        itemStyle: import("vue").ComputedRef<import("vue").StyleValue>;
        classes: import("vue").ComputedRef<string>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: number[];
        fill: boolean;
        style: import("./space/src/types").alignment;
        class: string;
        alignment: "alignments";
        direction: string;
        wrap: boolean;
        fillRatio: number;
        prefixCls: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        alignment: {
            type: import("vue").PropType<keyof import("./space/src/types").alignment>;
            default: string;
            required: boolean;
        };
        class: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
        direction: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
        style: {
            type: import("vue").PropType<import("./space/src/types").alignment>;
            default: string;
            required: boolean;
        };
        size: {
            type: import("vue").PropType<Array<number>>;
            default: string;
            required: boolean;
        };
        wrap: {
            type: import("vue").PropType<boolean>;
            default: boolean;
            required: boolean;
        };
        fill: {
            type: import("vue").PropType<boolean>;
            default: boolean;
            required: boolean;
        };
        fillRatio: {
            type: import("vue").PropType<number>;
            default: number;
            required: boolean;
        };
        prefixCls: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
    }>> & Readonly<{}>, {
        className: import("vue").ComputedRef<string[]>;
        containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
        itemStyle: import("vue").ComputedRef<import("vue").StyleValue>;
        classes: import("vue").ComputedRef<string>;
    }, {}, {}, {}, {
        size: number[];
        fill: boolean;
        style: import("./space/src/types").alignment;
        class: string;
        alignment: "alignments";
        direction: string;
        wrap: boolean;
        fillRatio: number;
        prefixCls: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    alignment: {
        type: import("vue").PropType<keyof import("./space/src/types").alignment>;
        default: string;
        required: boolean;
    };
    class: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
    direction: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
    style: {
        type: import("vue").PropType<import("./space/src/types").alignment>;
        default: string;
        required: boolean;
    };
    size: {
        type: import("vue").PropType<Array<number>>;
        default: string;
        required: boolean;
    };
    wrap: {
        type: import("vue").PropType<boolean>;
        default: boolean;
        required: boolean;
    };
    fill: {
        type: import("vue").PropType<boolean>;
        default: boolean;
        required: boolean;
    };
    fillRatio: {
        type: import("vue").PropType<number>;
        default: number;
        required: boolean;
    };
    prefixCls: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
}>> & Readonly<{}>, {
    className: import("vue").ComputedRef<string[]>;
    containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
    itemStyle: import("vue").ComputedRef<import("vue").StyleValue>;
    classes: import("vue").ComputedRef<string>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: number[];
    fill: boolean;
    style: import("./space/src/types").alignment;
    class: string;
    alignment: "alignments";
    direction: string;
    wrap: boolean;
    fillRatio: number;
    prefixCls: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        alignment: {
            type: import("vue").PropType<keyof import("./space/src/types").alignment>;
            default: string;
            required: boolean;
        };
        class: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
        direction: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
        style: {
            type: import("vue").PropType<import("./space/src/types").alignment>;
            default: string;
            required: boolean;
        };
        size: {
            type: import("vue").PropType<Array<number>>;
            default: string;
            required: boolean;
        };
        wrap: {
            type: import("vue").PropType<boolean>;
            default: boolean;
            required: boolean;
        };
        fill: {
            type: import("vue").PropType<boolean>;
            default: boolean;
            required: boolean;
        };
        fillRatio: {
            type: import("vue").PropType<number>;
            default: number;
            required: boolean;
        };
        prefixCls: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
    }>> & Readonly<{}>, {
        className: import("vue").ComputedRef<string[]>;
        containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
        itemStyle: import("vue").ComputedRef<import("vue").StyleValue>;
        classes: import("vue").ComputedRef<string>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        size: number[];
        fill: boolean;
        style: import("./space/src/types").alignment;
        class: string;
        alignment: "alignments";
        direction: string;
        wrap: boolean;
        fillRatio: number;
        prefixCls: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        alignment: {
            type: import("vue").PropType<keyof import("./space/src/types").alignment>;
            default: string;
            required: boolean;
        };
        class: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
        direction: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
        style: {
            type: import("vue").PropType<import("./space/src/types").alignment>;
            default: string;
            required: boolean;
        };
        size: {
            type: import("vue").PropType<Array<number>>;
            default: string;
            required: boolean;
        };
        wrap: {
            type: import("vue").PropType<boolean>;
            default: boolean;
            required: boolean;
        };
        fill: {
            type: import("vue").PropType<boolean>;
            default: boolean;
            required: boolean;
        };
        fillRatio: {
            type: import("vue").PropType<number>;
            default: number;
            required: boolean;
        };
        prefixCls: {
            type: import("vue").PropType<string>;
            default: string;
            required: boolean;
        };
    }>> & Readonly<{}>, {
        className: import("vue").ComputedRef<string[]>;
        containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
        itemStyle: import("vue").ComputedRef<import("vue").StyleValue>;
        classes: import("vue").ComputedRef<string>;
    }, {}, {}, {}, {
        size: number[];
        fill: boolean;
        style: import("./space/src/types").alignment;
        class: string;
        alignment: "alignments";
        direction: string;
        wrap: boolean;
        fillRatio: number;
        prefixCls: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    alignment: {
        type: import("vue").PropType<keyof import("./space/src/types").alignment>;
        default: string;
        required: boolean;
    };
    class: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
    direction: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
    style: {
        type: import("vue").PropType<import("./space/src/types").alignment>;
        default: string;
        required: boolean;
    };
    size: {
        type: import("vue").PropType<Array<number>>;
        default: string;
        required: boolean;
    };
    wrap: {
        type: import("vue").PropType<boolean>;
        default: boolean;
        required: boolean;
    };
    fill: {
        type: import("vue").PropType<boolean>;
        default: boolean;
        required: boolean;
    };
    fillRatio: {
        type: import("vue").PropType<number>;
        default: number;
        required: boolean;
    };
    prefixCls: {
        type: import("vue").PropType<string>;
        default: string;
        required: boolean;
    };
}>> & Readonly<{}>, {
    className: import("vue").ComputedRef<string[]>;
    containerStyle: import("vue").ComputedRef<import("vue").StyleValue>;
    itemStyle: import("vue").ComputedRef<import("vue").StyleValue>;
    classes: import("vue").ComputedRef<string>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    size: number[];
    fill: boolean;
    style: import("./space/src/types").alignment;
    class: string;
    alignment: "alignments";
    direction: string;
    wrap: boolean;
    fillRatio: number;
    prefixCls: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        maxValue: {
            type: NumberConstructor;
            default: number;
        };
        value: {
            type: NumberConstructor;
            default: number;
        };
        activeColor: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChecked?: (...args: any[]) => any;
    }>, {
        mytempscore: import("vue").Ref<number, number>;
        myscore: import("vue").Ref<number, number>;
        handleMouseEnter: (item: any) => null;
        handlechecked: (item: any) => void;
        restoreScore: () => null;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "checked"[], import("vue").PublicProps, {
        disabled: boolean;
        value: number;
        maxValue: number;
        activeColor: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        maxValue: {
            type: NumberConstructor;
            default: number;
        };
        value: {
            type: NumberConstructor;
            default: number;
        };
        activeColor: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChecked?: (...args: any[]) => any;
    }>, {
        mytempscore: import("vue").Ref<number, number>;
        myscore: import("vue").Ref<number, number>;
        handleMouseEnter: (item: any) => null;
        handlechecked: (item: any) => void;
        restoreScore: () => null;
    }, {}, {}, {}, {
        disabled: boolean;
        value: number;
        maxValue: number;
        activeColor: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    maxValue: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: NumberConstructor;
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChecked?: (...args: any[]) => any;
}>, {
    mytempscore: import("vue").Ref<number, number>;
    myscore: import("vue").Ref<number, number>;
    handleMouseEnter: (item: any) => null;
    handlechecked: (item: any) => void;
    restoreScore: () => null;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "checked"[], "checked", {
    disabled: boolean;
    value: number;
    maxValue: number;
    activeColor: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        maxValue: {
            type: NumberConstructor;
            default: number;
        };
        value: {
            type: NumberConstructor;
            default: number;
        };
        activeColor: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChecked?: (...args: any[]) => any;
    }>, {
        mytempscore: import("vue").Ref<number, number>;
        myscore: import("vue").Ref<number, number>;
        handleMouseEnter: (item: any) => null;
        handlechecked: (item: any) => void;
        restoreScore: () => null;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "checked"[], import("vue").PublicProps, {
        disabled: boolean;
        value: number;
        maxValue: number;
        activeColor: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        maxValue: {
            type: NumberConstructor;
            default: number;
        };
        value: {
            type: NumberConstructor;
            default: number;
        };
        activeColor: {
            type: StringConstructor;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onChecked?: (...args: any[]) => any;
    }>, {
        mytempscore: import("vue").Ref<number, number>;
        myscore: import("vue").Ref<number, number>;
        handleMouseEnter: (item: any) => null;
        handlechecked: (item: any) => void;
        restoreScore: () => null;
    }, {}, {}, {}, {
        disabled: boolean;
        value: number;
        maxValue: number;
        activeColor: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    maxValue: {
        type: NumberConstructor;
        default: number;
    };
    value: {
        type: NumberConstructor;
        default: number;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChecked?: (...args: any[]) => any;
}>, {
    mytempscore: import("vue").Ref<number, number>;
    myscore: import("vue").Ref<number, number>;
    handleMouseEnter: (item: any) => null;
    handlechecked: (item: any) => void;
    restoreScore: () => null;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "checked"[], "checked", {
    disabled: boolean;
    value: number;
    maxValue: number;
    activeColor: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            validator: (_val: typeof import("./text/src/types").sizes[number]) => boolean;
            default: string;
        };
        type: {
            type: StringConstructor;
            validator: (_val: typeof import("./text/src/types").types[number]) => boolean;
            default: string;
        };
        truncated: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: StringConstructor;
                validator: (_val: typeof import("./text/src/types").sizes[number]) => boolean;
                default: string;
            };
            type: {
                type: StringConstructor;
                validator: (_val: typeof import("./text/src/types").types[number]) => boolean;
                default: string;
            };
            truncated: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}> & {}>;
        classNames: import("vue").ComputedRef<string[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: string;
        size: string;
        tag: string;
        truncated: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            validator: (_val: typeof import("./text/src/types").sizes[number]) => boolean;
            default: string;
        };
        type: {
            type: StringConstructor;
            validator: (_val: typeof import("./text/src/types").types[number]) => boolean;
            default: string;
        };
        truncated: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: StringConstructor;
                validator: (_val: typeof import("./text/src/types").sizes[number]) => boolean;
                default: string;
            };
            type: {
                type: StringConstructor;
                validator: (_val: typeof import("./text/src/types").types[number]) => boolean;
                default: string;
            };
            truncated: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}> & {}>;
        classNames: import("vue").ComputedRef<string[]>;
    }, {}, {}, {}, {
        type: string;
        size: string;
        tag: string;
        truncated: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        validator: (_val: typeof import("./text/src/types").sizes[number]) => boolean;
        default: string;
    };
    type: {
        type: StringConstructor;
        validator: (_val: typeof import("./text/src/types").types[number]) => boolean;
        default: string;
    };
    truncated: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            validator: (_val: typeof import("./text/src/types").sizes[number]) => boolean;
            default: string;
        };
        type: {
            type: StringConstructor;
            validator: (_val: typeof import("./text/src/types").types[number]) => boolean;
            default: string;
        };
        truncated: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}> & {}>;
    classNames: import("vue").ComputedRef<string[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: string;
    size: string;
    tag: string;
    truncated: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            validator: (_val: typeof import("./text/src/types").sizes[number]) => boolean;
            default: string;
        };
        type: {
            type: StringConstructor;
            validator: (_val: typeof import("./text/src/types").types[number]) => boolean;
            default: string;
        };
        truncated: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: StringConstructor;
                validator: (_val: typeof import("./text/src/types").sizes[number]) => boolean;
                default: string;
            };
            type: {
                type: StringConstructor;
                validator: (_val: typeof import("./text/src/types").types[number]) => boolean;
                default: string;
            };
            truncated: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}> & {}>;
        classNames: import("vue").ComputedRef<string[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        type: string;
        size: string;
        tag: string;
        truncated: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            validator: (_val: typeof import("./text/src/types").sizes[number]) => boolean;
            default: string;
        };
        type: {
            type: StringConstructor;
            validator: (_val: typeof import("./text/src/types").types[number]) => boolean;
            default: string;
        };
        truncated: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                default: string;
            };
            size: {
                type: StringConstructor;
                validator: (_val: typeof import("./text/src/types").sizes[number]) => boolean;
                default: string;
            };
            type: {
                type: StringConstructor;
                validator: (_val: typeof import("./text/src/types").types[number]) => boolean;
                default: string;
            };
            truncated: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{}> & {}>;
        classNames: import("vue").ComputedRef<string[]>;
    }, {}, {}, {}, {
        type: string;
        size: string;
        tag: string;
        truncated: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        validator: (_val: typeof import("./text/src/types").sizes[number]) => boolean;
        default: string;
    };
    type: {
        type: StringConstructor;
        validator: (_val: typeof import("./text/src/types").types[number]) => boolean;
        default: string;
    };
    truncated: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            validator: (_val: typeof import("./text/src/types").sizes[number]) => boolean;
            default: string;
        };
        type: {
            type: StringConstructor;
            validator: (_val: typeof import("./text/src/types").types[number]) => boolean;
            default: string;
        };
        truncated: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{}> & {}>;
    classNames: import("vue").ComputedRef<string[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    type: string;
    size: string;
    tag: string;
    truncated: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            require: boolean;
            default: string;
        };
        gutter: {
            type: NumberConstructor;
            default: number;
        };
        justify: {
            type: StringConstructor;
            validator: (val: typeof import("./row/src/types").RowJustify[number]) => boolean;
            default: string;
        };
        align: {
            type: StringConstructor;
            validator: (val: typeof import("./row/src/types").RowAlign[number]) => boolean;
            default: string;
        };
    }>> & Readonly<{}>, {
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
        rowKls: import("vue").ComputedRef<string[]>;
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                require: boolean;
                default: string;
            };
            gutter: {
                type: NumberConstructor;
                default: number;
            };
            justify: {
                type: StringConstructor;
                validator: (val: typeof import("./row/src/types").RowJustify[number]) => boolean;
                default: string;
            };
            align: {
                type: StringConstructor;
                validator: (val: typeof import("./row/src/types").RowAlign[number]) => boolean;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        justify: string;
        tag: string;
        gutter: number;
        align: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            require: boolean;
            default: string;
        };
        gutter: {
            type: NumberConstructor;
            default: number;
        };
        justify: {
            type: StringConstructor;
            validator: (val: typeof import("./row/src/types").RowJustify[number]) => boolean;
            default: string;
        };
        align: {
            type: StringConstructor;
            validator: (val: typeof import("./row/src/types").RowAlign[number]) => boolean;
            default: string;
        };
    }>> & Readonly<{}>, {
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
        rowKls: import("vue").ComputedRef<string[]>;
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                require: boolean;
                default: string;
            };
            gutter: {
                type: NumberConstructor;
                default: number;
            };
            justify: {
                type: StringConstructor;
                validator: (val: typeof import("./row/src/types").RowJustify[number]) => boolean;
                default: string;
            };
            align: {
                type: StringConstructor;
                validator: (val: typeof import("./row/src/types").RowAlign[number]) => boolean;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, {
        justify: string;
        tag: string;
        gutter: number;
        align: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    justify: {
        type: StringConstructor;
        validator: (val: typeof import("./row/src/types").RowJustify[number]) => boolean;
        default: string;
    };
    align: {
        type: StringConstructor;
        validator: (val: typeof import("./row/src/types").RowAlign[number]) => boolean;
        default: string;
    };
}>> & Readonly<{}>, {
    style: import("vue").ComputedRef<import("vue").CSSProperties>;
    rowKls: import("vue").ComputedRef<string[]>;
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            require: boolean;
            default: string;
        };
        gutter: {
            type: NumberConstructor;
            default: number;
        };
        justify: {
            type: StringConstructor;
            validator: (val: typeof import("./row/src/types").RowJustify[number]) => boolean;
            default: string;
        };
        align: {
            type: StringConstructor;
            validator: (val: typeof import("./row/src/types").RowAlign[number]) => boolean;
            default: string;
        };
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    justify: string;
    tag: string;
    gutter: number;
    align: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            require: boolean;
            default: string;
        };
        gutter: {
            type: NumberConstructor;
            default: number;
        };
        justify: {
            type: StringConstructor;
            validator: (val: typeof import("./row/src/types").RowJustify[number]) => boolean;
            default: string;
        };
        align: {
            type: StringConstructor;
            validator: (val: typeof import("./row/src/types").RowAlign[number]) => boolean;
            default: string;
        };
    }>> & Readonly<{}>, {
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
        rowKls: import("vue").ComputedRef<string[]>;
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                require: boolean;
                default: string;
            };
            gutter: {
                type: NumberConstructor;
                default: number;
            };
            justify: {
                type: StringConstructor;
                validator: (val: typeof import("./row/src/types").RowJustify[number]) => boolean;
                default: string;
            };
            align: {
                type: StringConstructor;
                validator: (val: typeof import("./row/src/types").RowAlign[number]) => boolean;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        justify: string;
        tag: string;
        gutter: number;
        align: string;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            require: boolean;
            default: string;
        };
        gutter: {
            type: NumberConstructor;
            default: number;
        };
        justify: {
            type: StringConstructor;
            validator: (val: typeof import("./row/src/types").RowJustify[number]) => boolean;
            default: string;
        };
        align: {
            type: StringConstructor;
            validator: (val: typeof import("./row/src/types").RowAlign[number]) => boolean;
            default: string;
        };
    }>> & Readonly<{}>, {
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
        rowKls: import("vue").ComputedRef<string[]>;
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            tag: {
                type: StringConstructor;
                require: boolean;
                default: string;
            };
            gutter: {
                type: NumberConstructor;
                default: number;
            };
            justify: {
                type: StringConstructor;
                validator: (val: typeof import("./row/src/types").RowJustify[number]) => boolean;
                default: string;
            };
            align: {
                type: StringConstructor;
                validator: (val: typeof import("./row/src/types").RowAlign[number]) => boolean;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, {
        justify: string;
        tag: string;
        gutter: number;
        align: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    tag: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    justify: {
        type: StringConstructor;
        validator: (val: typeof import("./row/src/types").RowJustify[number]) => boolean;
        default: string;
    };
    align: {
        type: StringConstructor;
        validator: (val: typeof import("./row/src/types").RowAlign[number]) => boolean;
        default: string;
    };
}>> & Readonly<{}>, {
    style: import("vue").ComputedRef<import("vue").CSSProperties>;
    rowKls: import("vue").ComputedRef<string[]>;
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        tag: {
            type: StringConstructor;
            require: boolean;
            default: string;
        };
        gutter: {
            type: NumberConstructor;
            default: number;
        };
        justify: {
            type: StringConstructor;
            validator: (val: typeof import("./row/src/types").RowJustify[number]) => boolean;
            default: string;
        };
        align: {
            type: StringConstructor;
            validator: (val: typeof import("./row/src/types").RowAlign[number]) => boolean;
            default: string;
        };
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    justify: string;
    tag: string;
    gutter: number;
    align: string;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            require: boolean;
            default: number;
        };
        offset: {
            type: NumberConstructor;
            default: number;
        };
        push: {
            type: NumberConstructor;
            default: number;
        };
        pull: {
            type: StringConstructor;
            validator: (val: typeof import("./col/src/types").RowAlign[number]) => boolean;
            default: string;
        };
        xs: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        sm: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        md: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        lg: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        xl: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            span: {
                type: NumberConstructor;
                require: boolean;
                default: number;
            };
            offset: {
                type: NumberConstructor;
                default: number;
            };
            push: {
                type: NumberConstructor;
                default: number;
            };
            pull: {
                type: StringConstructor;
                validator: (val: typeof import("./col/src/types").RowAlign[number]) => boolean;
                default: string;
            };
            xs: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            sm: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            md: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            lg: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            xl: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
        colKls: import("vue").ComputedRef<(string | string[])[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        push: number;
        span: number;
        tag: string;
        offset: number;
        pull: string;
        xs: number | Record<string, any>;
        sm: number | Record<string, any>;
        md: number | Record<string, any>;
        lg: number | Record<string, any>;
        xl: number | Record<string, any>;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            require: boolean;
            default: number;
        };
        offset: {
            type: NumberConstructor;
            default: number;
        };
        push: {
            type: NumberConstructor;
            default: number;
        };
        pull: {
            type: StringConstructor;
            validator: (val: typeof import("./col/src/types").RowAlign[number]) => boolean;
            default: string;
        };
        xs: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        sm: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        md: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        lg: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        xl: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            span: {
                type: NumberConstructor;
                require: boolean;
                default: number;
            };
            offset: {
                type: NumberConstructor;
                default: number;
            };
            push: {
                type: NumberConstructor;
                default: number;
            };
            pull: {
                type: StringConstructor;
                validator: (val: typeof import("./col/src/types").RowAlign[number]) => boolean;
                default: string;
            };
            xs: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            sm: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            md: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            lg: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            xl: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
        colKls: import("vue").ComputedRef<(string | string[])[]>;
    }, {}, {}, {}, {
        push: number;
        span: number;
        tag: string;
        offset: number;
        pull: string;
        xs: number | Record<string, any>;
        sm: number | Record<string, any>;
        md: number | Record<string, any>;
        lg: number | Record<string, any>;
        xl: number | Record<string, any>;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    span: {
        type: NumberConstructor;
        require: boolean;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    push: {
        type: NumberConstructor;
        default: number;
    };
    pull: {
        type: StringConstructor;
        validator: (val: typeof import("./col/src/types").RowAlign[number]) => boolean;
        default: string;
    };
    xs: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    sm: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    md: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    lg: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    xl: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            require: boolean;
            default: number;
        };
        offset: {
            type: NumberConstructor;
            default: number;
        };
        push: {
            type: NumberConstructor;
            default: number;
        };
        pull: {
            type: StringConstructor;
            validator: (val: typeof import("./col/src/types").RowAlign[number]) => boolean;
            default: string;
        };
        xs: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        sm: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        md: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        lg: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        xl: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}> & {}>;
    style: import("vue").ComputedRef<import("vue").CSSProperties>;
    colKls: import("vue").ComputedRef<(string | string[])[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    push: number;
    span: number;
    tag: string;
    offset: number;
    pull: string;
    xs: number | Record<string, any>;
    sm: number | Record<string, any>;
    md: number | Record<string, any>;
    lg: number | Record<string, any>;
    xl: number | Record<string, any>;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            require: boolean;
            default: number;
        };
        offset: {
            type: NumberConstructor;
            default: number;
        };
        push: {
            type: NumberConstructor;
            default: number;
        };
        pull: {
            type: StringConstructor;
            validator: (val: typeof import("./col/src/types").RowAlign[number]) => boolean;
            default: string;
        };
        xs: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        sm: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        md: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        lg: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        xl: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            span: {
                type: NumberConstructor;
                require: boolean;
                default: number;
            };
            offset: {
                type: NumberConstructor;
                default: number;
            };
            push: {
                type: NumberConstructor;
                default: number;
            };
            pull: {
                type: StringConstructor;
                validator: (val: typeof import("./col/src/types").RowAlign[number]) => boolean;
                default: string;
            };
            xs: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            sm: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            md: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            lg: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            xl: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
        colKls: import("vue").ComputedRef<(string | string[])[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        push: number;
        span: number;
        tag: string;
        offset: number;
        pull: string;
        xs: number | Record<string, any>;
        sm: number | Record<string, any>;
        md: number | Record<string, any>;
        lg: number | Record<string, any>;
        xl: number | Record<string, any>;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            require: boolean;
            default: number;
        };
        offset: {
            type: NumberConstructor;
            default: number;
        };
        push: {
            type: NumberConstructor;
            default: number;
        };
        pull: {
            type: StringConstructor;
            validator: (val: typeof import("./col/src/types").RowAlign[number]) => boolean;
            default: string;
        };
        xs: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        sm: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        md: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        lg: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        xl: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            span: {
                type: NumberConstructor;
                require: boolean;
                default: number;
            };
            offset: {
                type: NumberConstructor;
                default: number;
            };
            push: {
                type: NumberConstructor;
                default: number;
            };
            pull: {
                type: StringConstructor;
                validator: (val: typeof import("./col/src/types").RowAlign[number]) => boolean;
                default: string;
            };
            xs: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            sm: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            md: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            lg: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            xl: {
                type: (ObjectConstructor | NumberConstructor)[];
                default: string;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{}> & {}>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
        colKls: import("vue").ComputedRef<(string | string[])[]>;
    }, {}, {}, {}, {
        push: number;
        span: number;
        tag: string;
        offset: number;
        pull: string;
        xs: number | Record<string, any>;
        sm: number | Record<string, any>;
        md: number | Record<string, any>;
        lg: number | Record<string, any>;
        xl: number | Record<string, any>;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    span: {
        type: NumberConstructor;
        require: boolean;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    push: {
        type: NumberConstructor;
        default: number;
    };
    pull: {
        type: StringConstructor;
        validator: (val: typeof import("./col/src/types").RowAlign[number]) => boolean;
        default: string;
    };
    xs: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    sm: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    md: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    lg: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    xl: {
        type: (ObjectConstructor | NumberConstructor)[];
        default: string;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        span: {
            type: NumberConstructor;
            require: boolean;
            default: number;
        };
        offset: {
            type: NumberConstructor;
            default: number;
        };
        push: {
            type: NumberConstructor;
            default: number;
        };
        pull: {
            type: StringConstructor;
            validator: (val: typeof import("./col/src/types").RowAlign[number]) => boolean;
            default: string;
        };
        xs: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        sm: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        md: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        lg: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        xl: {
            type: (ObjectConstructor | NumberConstructor)[];
            default: string;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{}> & {}>;
    style: import("vue").ComputedRef<import("vue").CSSProperties>;
    colKls: import("vue").ComputedRef<(string | string[])[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    push: number;
    span: number;
    tag: string;
    offset: number;
    pull: string;
    xs: number | Record<string, any>;
    sm: number | Record<string, any>;
    md: number | Record<string, any>;
    lg: number | Record<string, any>;
    xl: number | Record<string, any>;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        maxHeight: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        native: {
            type: BooleanConstructor;
        };
        "wrap-style": {
            type: StringConstructor;
            Object: ObjectConstructor;
        };
        "wrap-class": {
            type: StringConstructor;
        };
        "view-style": {
            type: StringConstructor;
        };
        'view-class': {
            type: StringConstructor;
        };
        tag: {
            type: StringConstructor;
        };
        always: {
            type: BooleanConstructor;
        };
        "min-size": {
            type: NumberConstructor;
        };
    }>> & Readonly<{}>, {
        scroll: import("vue").Ref<null, null>;
        style: {
            height: string;
            maxHeight: string;
        };
        wrapClass: import("vue").Ref<string, string>;
        viewClass: import("vue").Ref<string, string>;
        wrapStyle: string;
        viewStyle: string;
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            height: {
                type: NumberConstructor;
                String: StringConstructor;
            };
            maxHeight: {
                type: NumberConstructor;
                String: StringConstructor;
            };
            native: {
                type: BooleanConstructor;
            };
            "wrap-style": {
                type: StringConstructor;
                Object: ObjectConstructor;
            };
            "wrap-class": {
                type: StringConstructor;
            };
            "view-style": {
                type: StringConstructor;
            };
            'view-class': {
                type: StringConstructor;
            };
            tag: {
                type: StringConstructor;
            };
            always: {
                type: BooleanConstructor;
            };
            "min-size": {
                type: NumberConstructor;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        always: boolean;
        native: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        maxHeight: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        native: {
            type: BooleanConstructor;
        };
        "wrap-style": {
            type: StringConstructor;
            Object: ObjectConstructor;
        };
        "wrap-class": {
            type: StringConstructor;
        };
        "view-style": {
            type: StringConstructor;
        };
        'view-class': {
            type: StringConstructor;
        };
        tag: {
            type: StringConstructor;
        };
        always: {
            type: BooleanConstructor;
        };
        "min-size": {
            type: NumberConstructor;
        };
    }>> & Readonly<{}>, {
        scroll: import("vue").Ref<null, null>;
        style: {
            height: string;
            maxHeight: string;
        };
        wrapClass: import("vue").Ref<string, string>;
        viewClass: import("vue").Ref<string, string>;
        wrapStyle: string;
        viewStyle: string;
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            height: {
                type: NumberConstructor;
                String: StringConstructor;
            };
            maxHeight: {
                type: NumberConstructor;
                String: StringConstructor;
            };
            native: {
                type: BooleanConstructor;
            };
            "wrap-style": {
                type: StringConstructor;
                Object: ObjectConstructor;
            };
            "wrap-class": {
                type: StringConstructor;
            };
            "view-style": {
                type: StringConstructor;
            };
            'view-class': {
                type: StringConstructor;
            };
            tag: {
                type: StringConstructor;
            };
            always: {
                type: BooleanConstructor;
            };
            "min-size": {
                type: NumberConstructor;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, {
        always: boolean;
        native: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: NumberConstructor;
        String: StringConstructor;
    };
    maxHeight: {
        type: NumberConstructor;
        String: StringConstructor;
    };
    native: {
        type: BooleanConstructor;
    };
    "wrap-style": {
        type: StringConstructor;
        Object: ObjectConstructor;
    };
    "wrap-class": {
        type: StringConstructor;
    };
    "view-style": {
        type: StringConstructor;
    };
    'view-class': {
        type: StringConstructor;
    };
    tag: {
        type: StringConstructor;
    };
    always: {
        type: BooleanConstructor;
    };
    "min-size": {
        type: NumberConstructor;
    };
}>> & Readonly<{}>, {
    scroll: import("vue").Ref<null, null>;
    style: {
        height: string;
        maxHeight: string;
    };
    wrapClass: import("vue").Ref<string, string>;
    viewClass: import("vue").Ref<string, string>;
    wrapStyle: string;
    viewStyle: string;
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        maxHeight: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        native: {
            type: BooleanConstructor;
        };
        "wrap-style": {
            type: StringConstructor;
            Object: ObjectConstructor;
        };
        "wrap-class": {
            type: StringConstructor;
        };
        "view-style": {
            type: StringConstructor;
        };
        'view-class': {
            type: StringConstructor;
        };
        tag: {
            type: StringConstructor;
        };
        always: {
            type: BooleanConstructor;
        };
        "min-size": {
            type: NumberConstructor;
        };
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    always: boolean;
    native: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        maxHeight: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        native: {
            type: BooleanConstructor;
        };
        "wrap-style": {
            type: StringConstructor;
            Object: ObjectConstructor;
        };
        "wrap-class": {
            type: StringConstructor;
        };
        "view-style": {
            type: StringConstructor;
        };
        'view-class': {
            type: StringConstructor;
        };
        tag: {
            type: StringConstructor;
        };
        always: {
            type: BooleanConstructor;
        };
        "min-size": {
            type: NumberConstructor;
        };
    }>> & Readonly<{}>, {
        scroll: import("vue").Ref<null, null>;
        style: {
            height: string;
            maxHeight: string;
        };
        wrapClass: import("vue").Ref<string, string>;
        viewClass: import("vue").Ref<string, string>;
        wrapStyle: string;
        viewStyle: string;
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            height: {
                type: NumberConstructor;
                String: StringConstructor;
            };
            maxHeight: {
                type: NumberConstructor;
                String: StringConstructor;
            };
            native: {
                type: BooleanConstructor;
            };
            "wrap-style": {
                type: StringConstructor;
                Object: ObjectConstructor;
            };
            "wrap-class": {
                type: StringConstructor;
            };
            "view-style": {
                type: StringConstructor;
            };
            'view-class': {
                type: StringConstructor;
            };
            tag: {
                type: StringConstructor;
            };
            always: {
                type: BooleanConstructor;
            };
            "min-size": {
                type: NumberConstructor;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        always: boolean;
        native: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        maxHeight: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        native: {
            type: BooleanConstructor;
        };
        "wrap-style": {
            type: StringConstructor;
            Object: ObjectConstructor;
        };
        "wrap-class": {
            type: StringConstructor;
        };
        "view-style": {
            type: StringConstructor;
        };
        'view-class': {
            type: StringConstructor;
        };
        tag: {
            type: StringConstructor;
        };
        always: {
            type: BooleanConstructor;
        };
        "min-size": {
            type: NumberConstructor;
        };
    }>> & Readonly<{}>, {
        scroll: import("vue").Ref<null, null>;
        style: {
            height: string;
            maxHeight: string;
        };
        wrapClass: import("vue").Ref<string, string>;
        viewClass: import("vue").Ref<string, string>;
        wrapStyle: string;
        viewStyle: string;
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            height: {
                type: NumberConstructor;
                String: StringConstructor;
            };
            maxHeight: {
                type: NumberConstructor;
                String: StringConstructor;
            };
            native: {
                type: BooleanConstructor;
            };
            "wrap-style": {
                type: StringConstructor;
                Object: ObjectConstructor;
            };
            "wrap-class": {
                type: StringConstructor;
            };
            "view-style": {
                type: StringConstructor;
            };
            'view-class': {
                type: StringConstructor;
            };
            tag: {
                type: StringConstructor;
            };
            always: {
                type: BooleanConstructor;
            };
            "min-size": {
                type: NumberConstructor;
            };
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, {
        always: boolean;
        native: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: NumberConstructor;
        String: StringConstructor;
    };
    maxHeight: {
        type: NumberConstructor;
        String: StringConstructor;
    };
    native: {
        type: BooleanConstructor;
    };
    "wrap-style": {
        type: StringConstructor;
        Object: ObjectConstructor;
    };
    "wrap-class": {
        type: StringConstructor;
    };
    "view-style": {
        type: StringConstructor;
    };
    'view-class': {
        type: StringConstructor;
    };
    tag: {
        type: StringConstructor;
    };
    always: {
        type: BooleanConstructor;
    };
    "min-size": {
        type: NumberConstructor;
    };
}>> & Readonly<{}>, {
    scroll: import("vue").Ref<null, null>;
    style: {
        height: string;
        maxHeight: string;
    };
    wrapClass: import("vue").Ref<string, string>;
    viewClass: import("vue").Ref<string, string>;
    wrapStyle: string;
    viewStyle: string;
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        maxHeight: {
            type: NumberConstructor;
            String: StringConstructor;
        };
        native: {
            type: BooleanConstructor;
        };
        "wrap-style": {
            type: StringConstructor;
            Object: ObjectConstructor;
        };
        "wrap-class": {
            type: StringConstructor;
        };
        "view-style": {
            type: StringConstructor;
        };
        'view-class': {
            type: StringConstructor;
        };
        tag: {
            type: StringConstructor;
        };
        always: {
            type: BooleanConstructor;
        };
        "min-size": {
            type: NumberConstructor;
        };
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    always: boolean;
    native: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly msg: {
            readonly type: StringConstructor;
            readonly default: "hello";
        };
        readonly value: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly placeholder: {
            readonly type: StringConstructor;
            readonly default: "请输入";
        };
        readonly options: {
            readonly type: import("vue").PropType<Array<{
                label: string;
                value: string;
            }>>;
            readonly default: () => never[];
        };
        readonly disabled: BooleanConstructor;
        readonly clearable: BooleanConstructor;
        readonly loading: BooleanConstructor;
        readonly multiple: BooleanConstructor;
        readonly filterable: BooleanConstructor;
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly msg: {
                readonly type: StringConstructor;
                readonly default: "hello";
            };
            readonly value: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly placeholder: {
                readonly type: StringConstructor;
                readonly default: "请输入";
            };
            readonly options: {
                readonly type: import("vue").PropType<Array<{
                    label: string;
                    value: string;
                }>>;
                readonly default: () => never[];
            };
            readonly disabled: BooleanConstructor;
            readonly clearable: BooleanConstructor;
            readonly loading: BooleanConstructor;
            readonly multiple: BooleanConstructor;
            readonly filterable: BooleanConstructor;
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly disabled: boolean;
        readonly value: string;
        readonly loading: boolean;
        readonly placeholder: string;
        readonly clearable: boolean;
        readonly multiple: boolean;
        readonly msg: string;
        readonly options: {
            label: string;
            value: string;
        }[];
        readonly filterable: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly msg: {
            readonly type: StringConstructor;
            readonly default: "hello";
        };
        readonly value: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly placeholder: {
            readonly type: StringConstructor;
            readonly default: "请输入";
        };
        readonly options: {
            readonly type: import("vue").PropType<Array<{
                label: string;
                value: string;
            }>>;
            readonly default: () => never[];
        };
        readonly disabled: BooleanConstructor;
        readonly clearable: BooleanConstructor;
        readonly loading: BooleanConstructor;
        readonly multiple: BooleanConstructor;
        readonly filterable: BooleanConstructor;
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly msg: {
                readonly type: StringConstructor;
                readonly default: "hello";
            };
            readonly value: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly placeholder: {
                readonly type: StringConstructor;
                readonly default: "请输入";
            };
            readonly options: {
                readonly type: import("vue").PropType<Array<{
                    label: string;
                    value: string;
                }>>;
                readonly default: () => never[];
            };
            readonly disabled: BooleanConstructor;
            readonly clearable: BooleanConstructor;
            readonly loading: BooleanConstructor;
            readonly multiple: BooleanConstructor;
            readonly filterable: BooleanConstructor;
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, {
        readonly disabled: boolean;
        readonly value: string;
        readonly loading: boolean;
        readonly placeholder: string;
        readonly clearable: boolean;
        readonly multiple: boolean;
        readonly msg: string;
        readonly options: {
            label: string;
            value: string;
        }[];
        readonly filterable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly msg: {
        readonly type: StringConstructor;
        readonly default: "hello";
    };
    readonly value: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "请输入";
    };
    readonly options: {
        readonly type: import("vue").PropType<Array<{
            label: string;
            value: string;
        }>>;
        readonly default: () => never[];
    };
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly multiple: BooleanConstructor;
    readonly filterable: BooleanConstructor;
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly msg: {
            readonly type: StringConstructor;
            readonly default: "hello";
        };
        readonly value: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly placeholder: {
            readonly type: StringConstructor;
            readonly default: "请输入";
        };
        readonly options: {
            readonly type: import("vue").PropType<Array<{
                label: string;
                value: string;
            }>>;
            readonly default: () => never[];
        };
        readonly disabled: BooleanConstructor;
        readonly clearable: BooleanConstructor;
        readonly loading: BooleanConstructor;
        readonly multiple: BooleanConstructor;
        readonly filterable: BooleanConstructor;
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly disabled: boolean;
    readonly value: string;
    readonly loading: boolean;
    readonly placeholder: string;
    readonly clearable: boolean;
    readonly multiple: boolean;
    readonly msg: string;
    readonly options: {
        label: string;
        value: string;
    }[];
    readonly filterable: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & import("vue").ObjectPlugin<any[]>) | ({
    new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
        readonly msg: {
            readonly type: StringConstructor;
            readonly default: "hello";
        };
        readonly value: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly placeholder: {
            readonly type: StringConstructor;
            readonly default: "请输入";
        };
        readonly options: {
            readonly type: import("vue").PropType<Array<{
                label: string;
                value: string;
            }>>;
            readonly default: () => never[];
        };
        readonly disabled: BooleanConstructor;
        readonly clearable: BooleanConstructor;
        readonly loading: BooleanConstructor;
        readonly multiple: BooleanConstructor;
        readonly filterable: BooleanConstructor;
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly msg: {
                readonly type: StringConstructor;
                readonly default: "hello";
            };
            readonly value: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly placeholder: {
                readonly type: StringConstructor;
                readonly default: "请输入";
            };
            readonly options: {
                readonly type: import("vue").PropType<Array<{
                    label: string;
                    value: string;
                }>>;
                readonly default: () => never[];
            };
            readonly disabled: BooleanConstructor;
            readonly clearable: BooleanConstructor;
            readonly loading: BooleanConstructor;
            readonly multiple: BooleanConstructor;
            readonly filterable: BooleanConstructor;
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").PublicProps, {
        readonly disabled: boolean;
        readonly value: string;
        readonly loading: boolean;
        readonly placeholder: string;
        readonly clearable: boolean;
        readonly multiple: boolean;
        readonly msg: string;
        readonly options: {
            label: string;
            value: string;
        }[];
        readonly filterable: boolean;
    }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        readonly msg: {
            readonly type: StringConstructor;
            readonly default: "hello";
        };
        readonly value: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly placeholder: {
            readonly type: StringConstructor;
            readonly default: "请输入";
        };
        readonly options: {
            readonly type: import("vue").PropType<Array<{
                label: string;
                value: string;
            }>>;
            readonly default: () => never[];
        };
        readonly disabled: BooleanConstructor;
        readonly clearable: BooleanConstructor;
        readonly loading: BooleanConstructor;
        readonly multiple: BooleanConstructor;
        readonly filterable: BooleanConstructor;
    }>> & Readonly<{}>, {
        props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly msg: {
                readonly type: StringConstructor;
                readonly default: "hello";
            };
            readonly value: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly placeholder: {
                readonly type: StringConstructor;
                readonly default: "请输入";
            };
            readonly options: {
                readonly type: import("vue").PropType<Array<{
                    label: string;
                    value: string;
                }>>;
                readonly default: () => never[];
            };
            readonly disabled: BooleanConstructor;
            readonly clearable: BooleanConstructor;
            readonly loading: BooleanConstructor;
            readonly multiple: BooleanConstructor;
            readonly filterable: BooleanConstructor;
        }>> & Readonly<{}> & {}>;
    }, {}, {}, {}, {
        readonly disabled: boolean;
        readonly value: string;
        readonly loading: boolean;
        readonly placeholder: string;
        readonly clearable: boolean;
        readonly multiple: boolean;
        readonly msg: string;
        readonly options: {
            label: string;
            value: string;
        }[];
        readonly filterable: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly msg: {
        readonly type: StringConstructor;
        readonly default: "hello";
    };
    readonly value: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
        readonly default: "请输入";
    };
    readonly options: {
        readonly type: import("vue").PropType<Array<{
            label: string;
            value: string;
        }>>;
        readonly default: () => never[];
    };
    readonly disabled: BooleanConstructor;
    readonly clearable: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly multiple: BooleanConstructor;
    readonly filterable: BooleanConstructor;
}>> & Readonly<{}>, {
    props: import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly msg: {
            readonly type: StringConstructor;
            readonly default: "hello";
        };
        readonly value: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly placeholder: {
            readonly type: StringConstructor;
            readonly default: "请输入";
        };
        readonly options: {
            readonly type: import("vue").PropType<Array<{
                label: string;
                value: string;
            }>>;
            readonly default: () => never[];
        };
        readonly disabled: BooleanConstructor;
        readonly clearable: BooleanConstructor;
        readonly loading: BooleanConstructor;
        readonly multiple: BooleanConstructor;
        readonly filterable: BooleanConstructor;
    }>> & Readonly<{}> & {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {
    readonly disabled: boolean;
    readonly value: string;
    readonly loading: boolean;
    readonly placeholder: string;
    readonly clearable: boolean;
    readonly multiple: boolean;
    readonly msg: string;
    readonly options: {
        label: string;
        value: string;
    }[];
    readonly filterable: boolean;
}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & ((app: App, ...options: any[]) => any) & Partial<import("vue").ObjectPlugin<any[]>>))[];
export declare const ZhaoUI: {
    version: string;
    install(app: App, options?: {}): void;
};
//新增全局类型提示的支持
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
    ZStart:typeof ZStart,
     [key: string]: Component; // 新增这一行
  }
  export interface GlobalDirectives {
    [key: string]: import("vue").Directive; // 新增这一行，保证指令类型兼容
  }
}
export { ZButton, ZIcon, ZLink, ZCard, ZInput, ZTooltip, ZSpace, ZStart, ZText, ZRow, ZCol, ZScrollBarBar, ZAutocomplete, ZInputNumber };
export default ZhaoUI;
