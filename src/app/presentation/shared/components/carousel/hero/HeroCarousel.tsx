import { useHeroCarousel, useLanguage, useTheme } from "@application";
import { HERO_SLIDES } from "@domain";
import {
  HeroBackground,
  HeroContent,
  HeroControls,
  HeroIndicators,
} from "@presentation";

import type { JSX } from "react";

/**
 * @description Renderiza el carrusel principal optimizado para móviles y escritorio.
 * @author Steveen Cues
 * @version 2.4.0
 */
export default function HeroCarousel(): JSX.Element {
  const { activeIndex, showPrevious, showNext, showSlide } = useHeroCarousel();

  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  const activeSlide = HERO_SLIDES[activeIndex];

  return (
    <section
      aria-label={t("hero.ariaLabel")}
      className="
        group/hero relative isolate flex min-h-[100svh]
        w-auto items-center overflow-hidden
        -mx-4 -mt-24
        sm:-mx-6 sm:-mt-28
        lg:-mx-10 lg:-mt-32
        xl:-mx-12
      "
      style={{
        backgroundColor: colors.surface.background,
        color: colors.text.primary,
      }}
    >
      <HeroBackground slides={HERO_SLIDES} activeIndex={activeIndex} />

      {/* Iluminación de fondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse at 80% 50%,
            ${colors.brand.primary}12 0%,
            transparent 60%
          )`,
        }}
      />

      {/* Contenido principal con espacio vertical generoso para evitar amontonamiento */}
      <div
        className="
          relative z-10 mx-auto w-full max-w-[1600px]
          px-5 pt-36 pb-32
          sm:px-6 sm:pt-32 sm:pb-28
          lg:px-10 lg:pt-36
          xl:px-12
        "
      >
        <div
          className="max-w-3xl"
          style={{
            textShadow: `0 2px 24px ${colors.shadow.color}`,
          }}
        >
          <HeroContent slide={activeSlide} />
        </div>
      </div>

      <HeroControls onPrevious={showPrevious} onNext={showNext} />

      <HeroIndicators
        slides={HERO_SLIDES}
        activeIndex={activeIndex}
        onSelect={showSlide}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-px"
        style={{
          background: `linear-gradient(
            to right,
            transparent,
            ${colors.border.subtle},
            ${colors.brand.primary},
            ${colors.border.subtle},
            transparent
          )`,
        }}
      />
    </section>
  );
}
