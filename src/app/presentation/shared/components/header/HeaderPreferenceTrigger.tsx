import { useTheme } from "@application";

import type {
  HeaderRingcolor,
  IHeaderPreferenceTriggerProps,
} from "@presentation";
import type { JSX, MouseEvent } from "react";

/**
 * @description Renderiza el botón que abre o cierra el selector
 * de preferencias de la cabecera. Muestra texto solo en desktop y diseño compacto en móvil.
 * @template T Tipo del valor seleccionado.
 * @author Steveen Cues
 * @version 1.4.0
 */
export default function HeaderPreferenceTrigger<T extends string>({
  value,
  selectedOption,
  ariaLabel,
  isOpen,
  compact,
  onToggle,
}: IHeaderPreferenceTriggerProps<T>): JSX.Element {
  const { theme } = useTheme();
  const { colors } = theme;

  const buttonStyle: HeaderRingcolor = {
    backgroundColor: colors.surface.surfaceElevated,
    color: colors.text.primary,
    "--tw-ring-color": colors.border.focus,
  };

  const hasSelectedOption = selectedOption !== undefined;
  const selectedLabel = hasSelectedOption ? selectedOption.label : value;

  const handleMouseEnter = (event: MouseEvent<HTMLButtonElement>): void => {
    event.currentTarget.style.backgroundColor = colors.surface.surfaceHover;
  };

  const handleMouseLeave = (event: MouseEvent<HTMLButtonElement>): void => {
    event.currentTarget.style.backgroundColor = colors.surface.surfaceElevated;
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      className={`
        flex h-9 w-9 sm:h-10 sm:w-auto items-center justify-center sm:justify-between gap-2 rounded-full
        p-0 sm:px-4 text-sm font-medium
        transition-all duration-300 ease-in-out hover:shadow-md
        focus:outline-none focus:ring-2
        ${isOpen ? "ring-2" : ""}
      `}
      style={buttonStyle}
    >
      {/* Icono visible siempre (tanto en móvil como en desktop) */}
      {hasSelectedOption && (
        <span className="flex-shrink-0 text-base sm:text-lg opacity-90">
          {selectedOption.icon}
        </span>
      )}

      {/* Texto oculto en móvil, visible únicamente a partir de sm (desktop) */}
      {!compact && (
        <span className="hidden min-w-0 truncate pr-1 sm:inline sm:flex-1 sm:text-left">
          {selectedLabel}
        </span>
      )}

      {/* Flecha indicador, oculta en móvil para ahorrar espacio y visible en desktop */}
      <svg
        aria-hidden="true"
        className={`
          hidden h-4 w-4 flex-shrink-0 text-current opacity-70
          transition-transform duration-300 ease-out sm:block
          ${isOpen ? "rotate-180" : ""}
        `}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}
