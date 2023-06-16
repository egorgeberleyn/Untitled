import type { LazyExoticComponent } from "react";
import type { I18n } from "../../login/i18n";
import { type TemplateProps, type ClassKey } from "../../login/TemplateProps";
export type PageProps<KcContext, I18nExtended extends I18n> = {
    Template: LazyExoticComponent<(props: TemplateAdditionalProps<any, any>) => JSX.Element | null>;
    kcContext: KcContext;
    i18n: I18nExtended;
    doUseDefaultCss: boolean;
    classes?: Partial<Record<ClassKey, string>>;
};
