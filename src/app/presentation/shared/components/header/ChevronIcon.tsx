import type { JSX } from "react";

/**
 * @description Renderiza un icono chevron para elementos de navegación.
 * @returns {JSX.Element} Icono chevron accesible y reutilizable.
 * @author Steveen Cues
 * @version 2.0.0
 */
export default function ChevronIcon(): JSX.Element {
  return (
    <svg
      className="
        size-4 shrink-0 opacity-60
        transition-all duration-300 ease-out
        group-hover:translate-y-0.5
        group-hover:opacity-100
      "
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
