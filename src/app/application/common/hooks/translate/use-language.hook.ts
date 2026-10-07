import { useTranslation } from "react-i18next";

import { useTranslateContext } from "./use-translate.hook";

import type { LanguageState } from "@/app/domain";

/**
 * @description Hook para obtener funciones y valores
 * relacionados con la traducción.
 *
 * @returns {LanguageState} Estado y acciones de traducción
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useLanguage(): LanguageState {
  const { t } = useTranslation();
  const { language, changeTranslate } = useTranslateContext();

  return {
    t,
    language,
    changeTranslate,
  };
}
