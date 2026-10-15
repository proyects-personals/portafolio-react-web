import { useTheme } from "@application";

import type { IHeroIndicatorsProps } from "@presentation";
import type { JSX } from "react";

/**
 * @description Renderiza los indicadores de navegación del carrusel principal
 * con un diseño flotante moderno y adaptativo en dispositivos móviles.
 * @version 1.2.0
 * @author Steveen Cues
 */
export default function HeroIndicators({
  slides,
  activeIndex,
  onSelect,
}: IHeroIndicatorsProps): JSX.Element {
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <nav
      aria-label="Seleccionar diapositiva"
      className="
        absolute bottom-4 left-1/2 z-20 flex
        max-w-[calc(100%-1.5rem)] -translate-x-1/2 items-center
        gap-1.5 rounded-full border px-2.5 py-1.5
        backdrop-blur-xl transition-all duration-300
        sm:bottom-8 sm:gap-2.5 sm:px-4 sm:py-2
      "
      style={{
        backgroundColor: colors.effects.glassBackground,
        borderColor: colors.effects.glassBorder,
        boxShadow: colors.shadow.small,
      }}
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={slide.id}
            type="button"
            aria-label={`Mostrar diapositiva ${index + 1}`}
            aria-current={isActive ? "true" : undefined}
            onClick={() => onSelect(index)}
            className={`
              group relative flex h-6 min-w-[24px] items-center justify-center
              rounded-full transition-all duration-300 ease-out
              focus-visible:outline-2 focus-visible:outline-offset-2
              sm:h-7 sm:min-w-[28px]
              ${isActive ? "px-1" : "hover:scale-110"}
            `}
            style={{
              outlineColor: colors.border.focus,
            }}
          >
            <span
              aria-hidden="true"
              className={`
                block h-1.5 rounded-full transition-all duration-300 ease-out sm:h-2
                ${isActive ? "w-6 sm:w-9" : "w-1.5 opacity-50 group-hover:w-3 group-hover:opacity-100 sm:w-2"}
              `}
              style={{
                backgroundColor: isActive
                  ? colors.brand.primary
                  : colors.text.muted,
                boxShadow: isActive ? colors.shadow.glow : "none",
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
