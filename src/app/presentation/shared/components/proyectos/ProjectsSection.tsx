import { useTheme } from "@application";
import { COMPANY_PROJECTS } from "@domain";
import {
  ProjectCard,
  ProjectsCallToAction,
  ProjectsHeading,
} from "@presentation";

import type { JSX } from "react";

/**
 * @description Compone la sección de proyectos con tarjetas reutilizables,
 * información tecnológica y una llamada a la acción.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function ProjectsSection(): JSX.Element {
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative isolate overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ backgroundColor: colors.surface.background }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-20 right-0 -z-10 size-80 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: colors.brand.primary }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ProjectsHeading />

        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMPANY_PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <ProjectsCallToAction />
      </div>
    </section>
  );
}
