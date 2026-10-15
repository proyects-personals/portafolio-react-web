import {
  createHeroBottomGradient,
  createHeroHorizontalGradient,
  useLanguage,
  useTheme,
} from "@application";
import { HeroMedia, type IHeroBackgroundProps } from "@presentation";

import type { JSX } from "react";

/**
 * @description Renderiza el fondo del carrusel, sus capas de medios y degradados adaptativos.
 * Optimizado para rendimiento en móviles y contraste visual homogéneo.
 * @version 1.2.0
 * @author Steveen Cues
 */
export default function HeroBackground({
  slides,
  activeIndex,
}: IHeroBackgroundProps): JSX.Element {
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { colors } = theme;
  const backgroundColor = colors.surface.background;

  return (
    <div
      role="presentation"
      aria-label={t("hero.backgroundVideo")}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none"
      style={{ backgroundColor }}
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.id}
            className={`
              absolute inset-0 size-full
              transition-all duration-1000 ease-in-out
              ${
                isActive
                  ? "z-0 opacity-100 scale-100"
                  : "pointer-events-none -z-10 opacity-0 scale-105"
              }
            `}
            aria-hidden="true"
          >
            <HeroMedia slide={slide} isActive={isActive} />
          </div>
        );
      })}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 transition-colors duration-500"
        style={{ backgroundColor: colors.effects.overlay }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background: createHeroHorizontalGradient(backgroundColor),
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
        style={{
          background: createHeroBottomGradient(backgroundColor),
        }}
      />
    </div>
  );
}
