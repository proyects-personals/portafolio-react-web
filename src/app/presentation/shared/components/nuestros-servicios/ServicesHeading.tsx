import { useLanguage, useTheme } from "@application";

import type { JSX } from "react";

/**
 * @description Renderiza el encabezado y la introducción de servicios.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function ServicesHeading(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <header className="mx-auto mb-16 max-w-3xl text-center">
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
          className="size-2 animate-pulse rounded-full motion-reduce:animate-none"
          style={{ backgroundColor: colors.brand.primary }}
        />
        {t("services.eyebrow")}
      </span>

      <h2
        id="services-heading"
        className="mt-7 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl lg:text-6xl"
        style={{ color: colors.typography.heading.primary }}
      >
        {t("services.heading")}{" "}
        <span style={{ color: colors.brand.primary }}>
          {t("services.headingHighlight")}
        </span>
      </h2>

      <p
        className="mx-auto mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8"
        style={{ color: colors.text.secondary }}
      >
        {t("services.intro")}
      </p>
    </header>
  );
}
