import { useLanguage, useTheme } from "@application";

import type {
  HeaderRingcolor,
  IHeaderPreferenceSearchProps,
} from "@presentation";
import type { CSSProperties, FocusEvent, JSX } from "react";

/**
 * @description Restablece el fondo del campo de búsqueda al perder el foco.
 * @author Steveen Cues
 * @version 1.0.0
 */
function handleBlur(event: FocusEvent<HTMLInputElement>): void {
  event.currentTarget.style.backgroundColor = "transparent";
}

/**
 * @description Renderiza un campo de búsqueda para filtrar las opciones
 * del selector de preferencias de la cabecera.
 * @author Steveen Cues
 * @version 1.3.0
 */
export default function HeaderPreferenceSearch({
  value,
  inputRef,
  ariaLabel,
  onChange,
}: IHeaderPreferenceSearchProps): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  const containerStyle: CSSProperties = {
    borderColor: colors.border.subtle,
  };

  const inputStyle: HeaderRingcolor = {
    color: colors.text.primary,
    borderColor: colors.border.default,
    "--tw-ring-color": colors.border.focus,
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    event.currentTarget.style.backgroundColor = colors.surface.surfaceHover;
  };

  return (
    <div className="border-b px-3.5 py-3" style={containerStyle}>
      <div className="relative flex items-center">
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute left-3 size-4 opacity-60"
          style={{ color: colors.text.muted }}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          ref={inputRef}
          type="search"
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={t("header.preferences.search.placeholder")}
          aria-label={t("header.preferences.search.ariaLabel", {
            preference: ariaLabel,
          })}
          className="
            w-full rounded-xl border bg-transparent
            py-2 pl-9 pr-3 text-sm
            outline-none transition-colors duration-200
            focus:ring-2
          "
          style={inputStyle}
        />
      </div>
    </div>
  );
}
