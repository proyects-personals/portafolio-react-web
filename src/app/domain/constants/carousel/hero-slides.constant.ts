import type { HeroSlide } from "@domain";

/**
 * @description Intervalo de reproducción automática del carrusel en milisegundos.
 * @version 1.0.0
 * @author Steveen Cues
 */
export const AUTOPLAY_INTERVAL: number = 6000;

/**
 * @description Configuración de las diapositivas del carrusel principal.
 * Los textos se resuelven mediante las traducciones de i18n.
 * Una fuente multimedia vacía permite utilizar el fondo del tema.
 * @version 1.0.0
 * @author Steveen Cues
 */
export const HERO_SLIDES: readonly HeroSlide[] = [
  {
    id: 1,
    title: "hero.slides.technology.title",
    highlight: "hero.slides.technology.highlight",
    description: "hero.slides.technology.description",
    source: "/assets/hero/technology.jpg",
    type: "image",
  },
  {
    id: 2,
    title: "hero.slides.innovation.title",
    highlight: "hero.slides.innovation.highlight",
    description: "hero.slides.innovation.description",
    source: "/assets/hero/innovation.jpg",
    type: "image",
  },
  {
    id: 3,
    title: "hero.slides.future.title",
    highlight: "hero.slides.future.highlight",
    description: "hero.slides.future.description",
    source: "/assets/hero/technology.mp4",
    type: "video",
  },
];
