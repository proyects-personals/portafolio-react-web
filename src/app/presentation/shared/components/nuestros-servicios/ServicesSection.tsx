import { useTheme } from "@application";
import { COMPANY_SERVICES } from "@domain";
import {
  ServiceCard,
  ServicesCallToAction,
  ServicesHeading,
} from "@presentation";

import type { JSX } from "react";

/**
 * @description Compone la sección de servicios de la empresa, incluyendo
 * encabezado, tarjetas y llamada a la acción.
 * @author Steveen Cues
 * @version 2.0.0
 */
export default function ServicesSection(): JSX.Element {
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative isolate overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ backgroundColor: colors.surface.background }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -z-0 size-96 -translate-x-1/2 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: colors.brand.primary }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ServicesHeading />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANY_SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <ServicesCallToAction />
      </div>
    </section>
  );
}
