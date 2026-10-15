import type { IHeroMediaProps } from "@presentation";
import type { JSX } from "react";

/**
 * @description Renderiza el contenido multimedia de una diapositiva con
 * soporte para transiciones fluidas, optimización responsive y manejo elegante de fallos.
 *
 * @version 1.2.0
 * @author Steveen Cues
 */
export default function HeroMedia({
  slide,
  isActive,
}: IHeroMediaProps): JSX.Element | null {
  const source = slide.source.trim();

  if (!source) {
    return null;
  }

  const baseMediaStyle = `
    absolute inset-0 size-full object-cover object-center
    transition-all duration-1000 ease-in-out
    ${isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0 pointer-events-none"}
  `;

  return (
    <div className="absolute inset-0 size-full overflow-hidden">
      {slide.type === "image" ? (
        <img
          src={source}
          alt={slide.title ? "" : ""}
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className={baseMediaStyle}
          onError={(event): void => {
            event.currentTarget.style.display = "none";
          }}
        />
      ) : (
        <video
          src={source}
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload={isActive ? "metadata" : "none"}
          className={baseMediaStyle}
          onError={(event): void => {
            event.currentTarget.style.display = "none";
          }}
        />
      )}
      <div
        className={`
          pointer-events-none absolute inset-0 z-10
          bg-gradient-to-t from-black/60 via-black/20 to-transparent
          transition-opacity duration-700
          ${isActive ? "opacity-100" : "opacity-0"}
        `}
      />
    </div>
  );
}
