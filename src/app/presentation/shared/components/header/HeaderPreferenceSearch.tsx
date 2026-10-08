import type { JSX } from "react";

import { useLanguage, useTheme } from "@application";
import type { HeaderPreferenceSearchProps } from "@presentation";

/**
 * @description Campo de búsqueda del selector de preferencias.
 *
 * @param {HeaderPreferenceSearchProps} props Propiedades del buscador.
 * @returns {JSX.Element} Campo de búsqueda.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function HeaderPreferenceSearch({
  value,
  inputRef,
  ariaLabel,
  onChange,
}: HeaderPreferenceSearchProps): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <div
      className="border-b p-2"
      style={{
        borderColor: theme.colors.border.subtle,
      }}
    >
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={onChange}
        placeholder={t("header.preferences.search.placeholder")}
        className="
          w-full
          rounded-lg
          border
          bg-transparent
          px-3
          py-2
          text-sm
          outline-none
          transition-colors
        "
        style={{
          borderColor: theme.colors.border.default,
          color: theme.colors.text.primary,
        }}
        aria-label={t("header.preferences.search.ariaLabel", {
          preference: ariaLabel,
        })}
      />
    </div>
  );
}