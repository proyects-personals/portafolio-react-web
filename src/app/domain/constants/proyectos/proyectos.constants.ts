import type { CaseStudy } from "@domain";

/**
 * @description Catálogo de proyectos destacados de la empresa.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const COMPANY_PROJECTS: readonly CaseStudy[] = [
  {
    id: "business-platform",
    titleKey: "projects.platform.title",
    descriptionKey: "projects.platform.description",
    technologies: ["React", "TypeScript", "Python"],
  },
  {
    id: "cloud-platform",
    titleKey: "projects.cloud.title",
    descriptionKey: "projects.cloud.description",
    technologies: ["Angular", "FastAPI", "PostgreSQL"],
  },
  {
    id: "data-platform",
    titleKey: "projects.data.title",
    descriptionKey: "projects.data.description",
    technologies: ["Python", "Machine Learning", "Docker"],
  },
] as const;
