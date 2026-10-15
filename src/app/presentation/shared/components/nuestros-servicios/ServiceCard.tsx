import { useLanguage, useTheme } from "@application";
import { ServiceIcon, type ServiceCardProps } from "@presentation";

import type { JSX } from "react";

const SERVICE_NUMBER_WIDTH = 2;

/**
 * @description Renderiza una tarjeta de servicio con estilos dinámicos,
 * contenido traducible e interacciones visuales.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function ServiceCard({
  service,
  index,
}: ServiceCardProps): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  const serviceNumber = String(index + 1).padStart(SERVICE_NUMBER_WIDTH, "0");

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
      style={{
        backgroundColor: colors.surface.surface,
        borderColor: colors.border.subtle,
        boxShadow: colors.shadow.subtle,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
        style={{ backgroundColor: colors.brand.primary }}
      />

      <div className="flex items-center justify-between gap-3">
        <div
          className="flex size-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none"
          style={{
            backgroundColor: colors.effects.glassBackground,
            color: colors.brand.primary,
          }}
        >
          <ServiceIcon name={service.icon} />
        </div>

        <span
          aria-hidden="true"
          className="text-sm font-semibold tracking-wider"
          style={{ color: colors.text.muted }}
        >
          {serviceNumber}
        </span>
      </div>

      <h3
        className="mt-7 text-xl font-bold tracking-tight"
        style={{ color: colors.typography.heading.primary }}
      >
        {t(service.titleKey)}
      </h3>

      <p
        className="mt-3 flex-1 text-sm leading-7"
        style={{ color: colors.text.secondary }}
      >
        {t(service.descriptionKey)}
      </p>

      <a
        href="#contact"
        className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 motion-reduce:transition-none"
        style={{ color: colors.brand.primary }}
      >
        {t("common.learnMore")}

        <svg
          aria-hidden="true"
          className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </article>
  );
}
