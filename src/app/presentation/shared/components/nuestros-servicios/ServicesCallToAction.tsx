import { useLanguage, useTheme } from "@application";

import type { JSX } from "react";

/**
 * @description Invita al usuario a contactar a la empresa para iniciar
 * un proyecto tecnológico.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function ServicesCallToAction(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <aside
      className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border p-6 sm:flex-row sm:p-8"
      style={{
        backgroundColor: colors.surface.surface,
        borderColor: colors.border.subtle,
        boxShadow: colors.shadow.subtle,
      }}
    >
      <div>
        <h3
          className="text-xl font-bold"
          style={{ color: colors.typography.heading.primary }}
        >
          {t("services.ctaHeading")}
        </h3>

        <p
          className="mt-2 text-sm leading-6"
          style={{ color: colors.text.secondary }}
        >
          {t("services.ctaDescription")}
        </p>
      </div>

      <a
        href="#contact"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
        style={{
          backgroundColor: colors.brand.primary,
          color: colors.brand.primaryContrast,
          outlineColor: colors.border.focus,
        }}
      >
        {t("services.ctaButton")}

        <svg
          aria-hidden="true"
          className="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </a>
    </aside>
  );
}
