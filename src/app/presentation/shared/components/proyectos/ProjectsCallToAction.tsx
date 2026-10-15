import { useLanguage, useTheme } from "@application";

import type { JSX } from "react";

/**
 * @description Invita al usuario a conversar sobre un nuevo proyecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function ProjectsCallToAction(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <aside
      className="mt-10 flex flex-col items-start justify-between gap-6 rounded-2xl border p-6 sm:mt-12 sm:flex-row sm:items-center sm:p-8"
      style={{
        backgroundColor: colors.surface.surface,
        borderColor: colors.border.subtle,
        boxShadow: colors.shadow.subtle,
      }}
    >
      <div className="max-w-2xl">
        <h3
          className="text-xl font-bold sm:text-2xl"
          style={{ color: colors.typography.heading.primary }}
        >
          {t("projects.ctaHeading")}
        </h3>

        <p
          className="mt-2 text-sm leading-7"
          style={{ color: colors.text.secondary }}
        >
          {t("projects.ctaDescription")}
        </p>
      </div>

      <a
        href="#contact"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
        style={{
          color: colors.brand.primaryContrast,
          backgroundColor: colors.brand.primary,
          outlineColor: colors.border.focus,
        }}
      >
        {t("projects.ctaButton")}

        <span aria-hidden="true">↗</span>
      </a>
    </aside>
  );
}
