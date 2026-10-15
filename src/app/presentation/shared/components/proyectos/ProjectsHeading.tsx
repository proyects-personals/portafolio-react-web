import { useLanguage, useTheme } from "@application";

import type { JSX } from "react";

/**
 * @description Renderiza el encabezado y la introducción de los proyectos.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function ProjectsHeading(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <header className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
      <span
        className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold tracking-[0.18em] uppercase"
        style={{
          color: colors.brand.primary,
          backgroundColor: colors.surface.surface,
          borderColor: colors.border.subtle,
        }}
      >
        <span
          aria-hidden="true"
          className="size-2 rounded-full"
          style={{ backgroundColor: colors.brand.primary }}
        />

        {t("projects.eyebrow")}
      </span>

      <h2
        id="projects-heading"
        className="mt-7 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-6xl"
        style={{ color: colors.typography.heading.primary }}
      >
        {t("projects.heading")}
      </h2>

      <p
        className="mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8"
        style={{ color: colors.text.secondary }}
      >
        {t("projects.intro")}
      </p>
    </header>
  );
}
