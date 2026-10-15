import { useLanguage, useTheme } from "@application";
import {
  ProjectPreview,
  ProjectTechnologyList,
  type ProjectCardProps,
} from "@presentation";

import type { JSX } from "react";

/**
 * @description Presenta la información de un proyecto y compone su portada
 * visual, tecnologías y enlace de contacto.
 * @author Steveen Cues
 * @version 2.0.0
 */
export default function ProjectCard({
  project,
  index,
}: ProjectCardProps): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-2 motion-reduce:transition-none"
      style={{
        backgroundColor: colors.surface.surface,
        borderColor: colors.border.subtle,
        boxShadow: colors.shadow.subtle,
      }}
    >
      <ProjectPreview index={index} technologies={project.technologies} />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p
          className="text-xs font-bold tracking-[0.16em] uppercase"
          style={{ color: colors.brand.primary }}
        >
          {t("projects.caseLabel")}
        </p>

        <h3
          className="mt-3 text-xl font-bold tracking-tight"
          style={{ color: colors.typography.heading.primary }}
        >
          {t(project.titleKey)}
        </h3>

        <p
          className="mt-3 flex-1 text-sm leading-7"
          style={{ color: colors.text.secondary }}
        >
          {t(project.descriptionKey)}
        </p>

        <ProjectTechnologyList technologies={project.technologies} />

        <a
          href="#contact"
          className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 motion-reduce:transition-none"
          style={{
            color: colors.brand.primary,
            outlineColor: colors.border.focus,
          }}
        >
          {t("projects.discussProject")}

          <svg
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
}
