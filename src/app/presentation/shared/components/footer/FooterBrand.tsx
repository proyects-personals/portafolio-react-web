import { useLanguage, useTheme } from "@application";

import type { JSX } from "react";

/**
 * @description Renderiza la identidad visual y la descripción de marca del footer.
 * @returns {JSX.Element} Identidad visual responsive del footer.
 * @author Steveen Cues
 * @version 2.0.0
 */
export default function FooterBrand(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <div className="w-full min-w-0 max-w-sm">
      <a
        href="#home"
        aria-label={t("navigation.home")}
        className="group inline-flex max-w-full items-center gap-3 rounded-xl outline-none transition-opacity duration-300 hover:opacity-85 focus-visible:ring-2 focus-visible:ring-offset-4"
        style={{
          outlineColor: colors.border.focus,
        }}
      >
        <span
          aria-hidden="true"
          className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-105 sm:size-12"
          style={{
            background: `linear-gradient(135deg, ${colors.brand.primary}, ${colors.brand.secondary})`,
            boxShadow: colors.shadow.medium,
          }}
        >
          <svg
            className="size-5 transition-transform duration-300 group-hover:scale-110 sm:size-6"
            style={{ color: colors.brand.primaryContrast }}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="m8 8-4 4 4 4" />
            <path d="m16 8 4 4-4 4" />
            <path d="m14 4-4 16" />
          </svg>
        </span>

        <span className="flex min-w-0 flex-col gap-0.5">
          <span
            className="truncate text-lg leading-tight font-extrabold tracking-tight sm:text-xl"
            style={{ color: colors.typography.heading.primary }}
          >
            INNOVATECH
          </span>

          <span
            className="text-[10px] font-semibold tracking-[0.2em] uppercase sm:text-xs"
            style={{ color: colors.brand.primary }}
          >
            Digital solutions
          </span>
        </span>
      </a>

      <p
        className="mt-4 max-w-sm text-sm leading-6 sm:mt-5 sm:text-[15px]"
        style={{ color: colors.text.secondary }}
      >
        {t("footer.description")}
      </p>

      <div
        aria-hidden="true"
        className="mt-5 h-px w-16 rounded-full transition-all duration-300 group-hover:w-24"
        style={{
          background: `linear-gradient(to right, ${colors.brand.primary}, ${colors.brand.secondary})`,
        }}
      />
    </div>
  );
}
