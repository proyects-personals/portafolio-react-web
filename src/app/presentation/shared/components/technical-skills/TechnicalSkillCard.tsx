import { useLanguage, useTheme } from "@application";

import type { TechnicalSkillCardProps } from "@presentation";
import type { JSX } from "react";

const SKILL_NUMBER_WIDTH = 2;

/**
 * @description Presenta una categoría de habilidades técnicas mediante
 * una tarjeta adaptable al tema y con tecnologías etiquetadas.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function TechnicalSkillCard({
  skill,
  index,
}: TechnicalSkillCardProps): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  const skillNumber = String(index + 1).padStart(SKILL_NUMBER_WIDTH, "0");

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 motion-reduce:transition-none sm:p-7"
      style={{
        backgroundColor: colors.surface.surface,
        borderColor: colors.border.subtle,
        boxShadow: colors.shadow.subtle,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none"
        style={{ backgroundColor: colors.brand.primary }}
      />

      <div className="flex items-start justify-between gap-4">
        <div
          aria-hidden="true"
          className="flex size-14 items-center justify-center rounded-2xl text-lg font-extrabold transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
          style={{
            backgroundColor: colors.effects.glassBackground,
            color: colors.brand.primary,
          }}
        >
          {skill.symbol}
        </div>

        <span
          aria-hidden="true"
          className="text-sm font-semibold tracking-widest"
          style={{ color: colors.text.muted }}
        >
          {skillNumber}
        </span>
      </div>

      <h3
        className="mt-6 text-xl font-bold tracking-tight"
        style={{ color: colors.typography.heading.primary }}
      >
        {t(skill.titleKey)}
      </h3>

      <p
        className="mt-3 text-sm leading-7"
        style={{ color: colors.text.secondary }}
      >
        {t(skill.descriptionKey)}
      </p>

      <ul
        aria-label={t("technicalSkills.technologiesLabel")}
        className="mt-5 flex flex-wrap gap-2"
      >
        {skill.technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-lg border px-3 py-2 text-xs font-medium transition-colors duration-200"
            style={{
              color: colors.text.secondary,
              backgroundColor: colors.surface.background,
              borderColor: colors.border.subtle,
            }}
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}
