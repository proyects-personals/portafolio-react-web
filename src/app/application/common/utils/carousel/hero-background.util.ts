/**
 * @description Genera el gradiente horizontal de contraste del carrusel.
 * @version 1.0.0
 * @author Steveen Cues
 */
export function createHeroHorizontalGradient(backgroundColor: string): string {
  return `linear-gradient(to right, ${backgroundColor}E6 0%, ${backgroundColor}99 50%, ${backgroundColor}40 100%)`;
}

/**
 * @description Genera el gradiente inferior para integrar el carrusel con el tema.
 * @version 1.0.0
 * @author Steveen Cues
 */
export function createHeroBottomGradient(backgroundColor: string): string {
  return `linear-gradient(to top, ${backgroundColor}B3 0%, transparent 45%)`;
}
