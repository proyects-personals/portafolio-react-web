import { useCallback, useEffect, useState } from "react";

import {
  AUTOPLAY_INTERVAL,
  HERO_SLIDES,
  type UseHeroCarouselReturn,
} from "@domain";

/**
 * @description Gestiona la navegación y reproducción automática del carrusel principal.
 * @returns {UseHeroCarouselReturn} Estado e interfaces de navegación del carrusel.
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useHeroCarousel(): UseHeroCarouselReturn {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const showNext = useCallback((): void => {
    setActiveIndex(
      (currentIndex: number): number => (currentIndex + 1) % HERO_SLIDES.length,
    );
  }, []);

  const showPrevious = useCallback((): void => {
    setActiveIndex(
      (currentIndex: number): number =>
        (currentIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  }, []);

  const showSlide = useCallback((index: number): void => {
    if (index < 0 || index >= HERO_SLIDES.length) {
      return;
    }

    setActiveIndex(index);
  }, []);

  useEffect((): (() => void) => {
    const intervalId: number = window.setInterval(showNext, AUTOPLAY_INTERVAL);

    return (): void => {
      window.clearInterval(intervalId);
    };
  }, [showNext]);

  return {
    activeIndex,
    showPrevious,
    showNext,
    showSlide,
  };
}
