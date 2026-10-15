import { SERVICE_ICONS } from "@domain";

import type { ServiceIconProps } from "@presentation";
import type { JSX } from "react";

/**
 * @description Renderiza un icono SVG para un servicio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function ServiceIcon({ name }: ServiceIconProps): JSX.Element {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className="size-7 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {SERVICE_ICONS[name]}
    </svg>
  );
}
