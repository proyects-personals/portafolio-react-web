import { useLanguage, useTheme } from "@application";

import type { IHeroControlsProps } from "@presentation";
import type { JSX } from "react";

const CONTROL_BUTTON_CLASS =
  "pointer-events-auto absolute top-[58%] sm:top-1/2 flex size-10 sm:size-12 -translate-y-1/2 items-center justify-center rounded-full border opacity-90 sm:opacity-0 sm:group-hover/hero:opacity-100 sm:group-focus-within/hero:opacity-100 shadow-md backdrop-blur-xl transition-all duration-300 ease-out hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none";

/**
 * @description Controles de navegación laterales adaptados para evitar colisiones con texto en móvil.
 * @author Steveen Cues
 * @version 2.2.0
 */
export default function HeroControls({
  onPrevious,
  onNext,
}: IHeroControlsProps): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  const buttonStyle = {
    color: colors.text.primary,
    backgroundColor: colors.effects.glassBackground,
    borderColor: colors.effects.glassBorder,
    boxShadow: colors.shadow.medium,
    outlineColor: colors.border.focus,
  };

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      <button
        type="button"
        onClick={onPrevious}
        aria-label={t("hero.previousSlide")}
        className={`${CONTROL_BUTTON_CLASS} left-3 sm:left-6 lg:left-8`}
        style={buttonStyle}
      >
        <svg
          aria-hidden="true"
          className="size-4 sm:size-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label={t("hero.nextSlide")}
        className={`${CONTROL_BUTTON_CLASS} right-3 sm:right-6 lg:right-8`}
        style={buttonStyle}
      >
        <svg
          aria-hidden="true"
          className="size-4 sm:size-5 shrink-0"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
