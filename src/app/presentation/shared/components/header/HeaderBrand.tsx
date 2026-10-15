import { useLanguage, useTheme } from "@application";

import type { HeaderRingcolor } from "@presentation";
import type { JSX } from "react";

/**
 * @description Renderiza la marca principal de la cabecera con identidad
 * visual adaptable al tema y diseño responsive optimizado para mostrar el logo y texto completo.
 * @author Steveen Cues
 * @version 1.4.0
 */
export default function HeaderBrand(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  const brandStyle: HeaderRingcolor = {
    "--tw-ring-color": colors.border.focus,
  };

  return (
    <a
      href="#home"
      aria-label={t("navigation.home")}
      className="group flex min-w-0 shrink-0 items-center gap-2 rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 sm:gap-3"
      style={brandStyle}
    >
      <div
        className="
          flex h-8 w-8 shrink-0 items-center justify-center
          rounded-lg sm:rounded-xl
          transition-all duration-300 ease-out
          group-hover:scale-105 group-hover:rotate-3
          group-active:scale-95
          sm:h-10 sm:w-10
        "
        style={{
          backgroundColor: colors.brand.primary,
          boxShadow: colors.shadow.medium,
        }}
      >
        <svg
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:scale-110 sm:h-5 sm:w-5"
          style={{ color: colors.brand.primaryContrast }}
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      </div>

      <span
        className="
          text-sm font-extrabold
          transition-colors duration-200
          group-hover:opacity-90
          sm:text-lg
          md:text-xl
        "
        style={{ color: colors.typography.heading.primary }}
      >
        {t("page.name")}
      </span>
    </a>
  );
}
