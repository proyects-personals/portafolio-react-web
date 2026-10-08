import { LANGUAGE_OPTIONS } from "@/app/domain";
import { useLanguage } from "@application";

import HeaderPreferenceSelect from "./HeaderPreferenceSelect";

import type { JSX } from "react";

/**
 * @description Selector compacto de idioma para el header.
 *
 * @returns {JSX.Element} Selector de idioma
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function HeaderLanguage(): JSX.Element {
  const { language, changeTranslate } = useLanguage();

  return (
    <HeaderPreferenceSelect
      value={language}
      options={[...LANGUAGE_OPTIONS]}
      onChange={changeTranslate}
      ariaLabel="Seleccionar idioma"
      compact
    />
  );
}
