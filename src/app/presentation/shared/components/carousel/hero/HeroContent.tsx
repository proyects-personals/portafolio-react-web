import { useLanguage, useTheme } from "@application";

import type { HeroContentProps } from "@presentation";
import type { CSSProperties, JSX } from "react";

const BADGE_ANIMATION_DELAY = 100;
const TITLE_ANIMATION_DELAY = 250;
const HIGHLIGHT_ANIMATION_DELAY = 400;
const DESCRIPTION_ANIMATION_DELAY = 450;
const ACTIONS_ANIMATION_DELAY = 650;

function createAnimationStyle(delay: number): CSSProperties {
  return {
    animationDelay: `${delay}ms`,
  };
}

/**
 * @description Contenido de la diapositiva con espaciado optimizado para evitar saturación visual en móviles.
 * @author Steveen Cues
 * @version 2.4.0
 */
export default function HeroContent({ slide }: HeroContentProps): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <div key={slide.id} className="w-full max-w-2xl text-left">
      {/* Badge Superior */}
      <span
        className="
          inline-flex animate-[fade-in-up_700ms_ease-out_both]
          items-center gap-2 rounded-full border
          px-3.5 py-1.5 text-xs font-medium backdrop-blur-md
          sm:px-5 sm:py-2 sm:text-sm
        "
        style={{
          ...createAnimationStyle(BADGE_ANIMATION_DELAY),
          color: colors.brand.primary,
          backgroundColor: colors.effects.glassBackground,
          borderColor: colors.effects.glassBorder,
        }}
      >
        <span
          aria-hidden="true"
          className="size-1.5 sm:size-2 animate-pulse rounded-full shrink-0"
          style={{ backgroundColor: colors.brand.primary }}
        />
        <span className="truncate">{t("hero.badge")}</span>
      </span>

      {/* Título Principal */}
      <h1
        className="
          mt-3 sm:mt-5 animate-[fade-in-up_800ms_ease-out_both]
          text-3xl font-extrabold leading-[1.15] tracking-tight
          xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        "
        style={{
          ...createAnimationStyle(TITLE_ANIMATION_DELAY),
          color: colors.typography.heading.primary,
        }}
      >
        {t(slide.title)}{" "}
        <span
          className="inline-block animate-[fade-in-up_900ms_ease-out_both]"
          style={{
            ...createAnimationStyle(HIGHLIGHT_ANIMATION_DELAY),
            color: colors.brand.primary,
            textShadow: colors.shadow.glow,
          }}
        >
          {t(slide.highlight)}
        </span>
      </h1>

      {/* Descripción */}
      <p
        className="
          mt-3 sm:mt-5 max-w-xl animate-[fade-in-up_800ms_ease-out_both]
          text-sm leading-relaxed sm:text-base md:text-lg opacity-90
        "
        style={{
          ...createAnimationStyle(DESCRIPTION_ANIMATION_DELAY),
          color: colors.typography.body.primary,
        }}
      >
        {t(slide.description)}
      </p>

      {/* Acciones / Botones */}
      <div
        className="
          mt-6 sm:mt-8 flex animate-[fade-in-up_800ms_ease-out_both]
          flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-4
        "
        style={createAnimationStyle(ACTIONS_ANIMATION_DELAY)}
      >
        <a
          href="#contact"
          className="
            group inline-flex w-full items-center justify-center gap-2.5 rounded-full
            px-6 py-3.5 text-sm font-semibold
            transition-all duration-300
            hover:-translate-y-0.5 hover:shadow-lg
            active:scale-95
            focus-visible:outline-2 focus-visible:outline-offset-4
            sm:w-auto sm:px-7 sm:py-4 sm:text-base
          "
          style={{
            backgroundColor: colors.brand.primary,
            color: colors.brand.primaryContrast,
            boxShadow: colors.shadow.small,
            outlineColor: colors.border.focus,
          }}
          onMouseEnter={(event): void => {
            event.currentTarget.style.backgroundColor =
              colors.brand.primaryHover;
          }}
          onMouseLeave={(event): void => {
            event.currentTarget.style.backgroundColor = colors.brand.primary;
          }}
        >
          <span>{t("hero.primaryAction")}</span>
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>

        <a
          href="#about"
          className="
            inline-flex w-full items-center justify-center gap-2 rounded-full border
            px-6 py-3.5 text-sm font-semibold backdrop-blur-md
            transition-all duration-300
            hover:-translate-y-0.5
            active:scale-95
            focus-visible:outline-2 focus-visible:outline-offset-4
            sm:w-auto sm:px-7 sm:py-4 sm:text-base
          "
          style={{
            color: colors.text.primary,
            backgroundColor: colors.effects.glassBackground,
            borderColor: colors.border.strong,
            outlineColor: colors.border.focus,
          }}
          onMouseEnter={(event): void => {
            event.currentTarget.style.backgroundColor = colors.effects.backdrop;
            event.currentTarget.style.borderColor = colors.border.hover;
          }}
          onMouseLeave={(event): void => {
            event.currentTarget.style.backgroundColor =
              colors.effects.glassBackground;
            event.currentTarget.style.borderColor = colors.border.strong;
          }}
        >
          {t("hero.secondaryAction")}
        </a>
      </div>
    </div>
  );
}
