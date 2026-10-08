import type { JSX } from "react";

import { useTheme } from "@application";
import type { HeaderPreferenceTriggerProps } from "@presentation";

/**
 * @description Botón que abre o cierra el selector de preferencias.
 *
 * @template T Tipo del valor.
 *
 * @param {HeaderPreferenceTriggerProps<T>} props Propiedades del trigger.
 * @returns {JSX.Element} Trigger del selector.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function HeaderPreferenceTrigger<T extends string>({
  value,
  selectedOption,
  ariaLabel,
  isOpen,
  compact,
  onToggle,
}: HeaderPreferenceTriggerProps<T>): JSX.Element {
  const { theme } = useTheme();

  return (
    <button
      type="button"
      onClick={onToggle}
      className="
        flex
        h-9
        max-w-12
        items-center
        justify-center
        gap-1.5
        rounded-full
        border
        px-2.5
        text-xs
        font-medium
        transition-opacity
        duration-200
        hover:opacity-80
        focus:outline-none
        focus:ring-2
        sm:max-w-none
      "
      style={{
        backgroundColor: theme.colors.surface.surfaceElevated,
        borderColor: theme.colors.border.default,
        color: theme.colors.text.primary,
        outlineColor: theme.colors.border.focus,
      }}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
    >
      {selectedOption?.icon}

      {!compact && (
        <span className="hidden truncate sm:inline">
          {selectedOption?.label ?? value}
        </span>
      )}

      <svg
        className={`
          hidden
          h-3.5
          w-3.5
          transition-transform
          duration-200
          sm:block
          ${isOpen ? "rotate-180" : ""}
        `}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}
