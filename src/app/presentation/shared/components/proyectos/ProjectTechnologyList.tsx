import { useLanguage, useTheme } from "@application";

import type { ProjectTechnologyListProps } from "@presentation";
import type { JSX } from "react";

/**
 * @description Renderiza las tecnologías utilizadas en un proyecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function ProjectTechnologyList({
  technologies,
}: ProjectTechnologyListProps): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <ul
      aria-label={t("projects.technologies")}
      className="mt-5 flex flex-wrap gap-2"
    >
      {technologies.map((technology) => (
        <li
          key={technology}
          className="rounded-full border px-3 py-1.5 text-xs font-medium"
          style={{
            color: colors.text.secondary,
            backgroundColor: colors.effects.glassBackground,
            borderColor: colors.border.subtle,
          }}
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}
