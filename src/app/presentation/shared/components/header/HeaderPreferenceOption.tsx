import { useTheme } from "@application";

import type {
  HeaderRingcolor,
  IHeaderPreferenceOptionProps,
} from "@presentation";
import type { JSX, MouseEvent } from "react";

/**
 * @description Renderiza una opción individual del selector de preferencias.
 * @template T Tipo del valor de la opción.
 * @author Steveen Cues
 * @version 1.3.0
 */
export default function HeaderPreferenceOption<T extends string>({
  option,
  selected,
  onSelect,
}: IHeaderPreferenceOptionProps<T>): JSX.Element {
  const { theme } = useTheme();
  const { colors } = theme;

  const optionStyle: HeaderRingcolor = {
    backgroundColor: selected ? colors.brand.primary : "transparent",
    color: selected ? colors.brand.primaryContrast : colors.text.primary,
    "--tw-ring-color": colors.border.focus,
  };

  const handleSelect = (): void => {
    onSelect(option.value);
  };

  const handleMouseEnter = (event: MouseEvent<HTMLButtonElement>): void => {
    if (selected) {
      return;
    }

    event.currentTarget.style.backgroundColor = colors.surface.surfaceHover;
  };

  const handleMouseLeave = (event: MouseEvent<HTMLButtonElement>): void => {
    if (selected) {
      return;
    }

    event.currentTarget.style.backgroundColor = "transparent";
  };

  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      onClick={handleSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm font-medium transition-all duration-200 ease-in-out focus:outline-none focus:ring-2"
      style={optionStyle}
    >
      {option.icon !== undefined && option.icon !== null && (
        <span
          className={`shrink-0 text-base transition-opacity duration-200 ${
            selected ? "opacity-100" : "opacity-80"
          }`}
        >
          {option.icon}
        </span>
      )}

      <span className="min-w-0 flex-1 truncate">{option.label}</span>

      {selected && (
        <span
          className="flex shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <svg
            className="size-4 stroke-[2.5]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5 13 4 4L19 7"
            />
          </svg>
        </span>
      )}
    </button>
  );
}
