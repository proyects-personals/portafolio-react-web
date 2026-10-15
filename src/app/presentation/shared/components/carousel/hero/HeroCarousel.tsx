import { useRef } from "react";

import { useHeroCarousel, useLanguage, useTheme } from "@application";
import { HERO_SLIDES } from "@domain";
import {
  HeroBackground,
  HeroContent,
  HeroControls,
  HeroIndicators,
  type HeroTouchPosition,
} from "@presentation";

import type { JSX, TouchEvent } from "react";

const MIN_SWIPE_DISTANCE = 50;
const FIRST_TOUCH_INDEX = 0;

/**
 * @description Presenta el carrusel principal con navegación por gestos
 * táctiles, controles de escritorio y estilos adaptados al tema.
 * @author Steveen Cues
 * @version 2.4.0
 */
export default function HeroCarousel(): JSX.Element {
  const { activeIndex, showPrevious, showNext, showSlide } = useHeroCarousel();

  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  const touchStartPosition = useRef<HeroTouchPosition | null>(null);
  const activeSlide = HERO_SLIDES[activeIndex];

  const handleTouchStart = (event: TouchEvent<HTMLElement>): void => {
    const target = event.target;

    if (
      target instanceof Element &&
      target.closest("a, button, input, textarea, select") !== null
    ) {
      touchStartPosition.current = null;
      return;
    }

    const touch = event.touches.item(FIRST_TOUCH_INDEX);

    touchStartPosition.current = {
      x: touch.clientX,
      y: touch.clientY,
    };
  };

  const handleTouchEnd = (event: TouchEvent<HTMLElement>): void => {
    const startPosition = touchStartPosition.current;

    touchStartPosition.current = null;

    if (startPosition === null) {
      return;
    }

    const touch = event.changedTouches.item(FIRST_TOUCH_INDEX);
    const deltaX = touch.clientX - startPosition.x;
    const deltaY = touch.clientY - startPosition.y;

    if (
      Math.abs(deltaX) < MIN_SWIPE_DISTANCE ||
      Math.abs(deltaX) <= Math.abs(deltaY)
    ) {
      return;
    }

    if (deltaX < 0) {
      showNext();
      return;
    }

    showPrevious();
  };

  const handleTouchCancel = (): void => {
    touchStartPosition.current = null;
  };

  return (
    <section
      id="home"
      aria-label={t("hero.ariaLabel")}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
      className="
        group/hero relative isolate flex min-h-screen
        w-auto touch-pan-y items-center overflow-hidden
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

      <div
        className="
          relative z-10 mx-auto w-full max-w-[1600px]
          px-4 pb-20 pt-28
          sm:px-6 sm:pt-32
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
