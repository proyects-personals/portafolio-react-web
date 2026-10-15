import type { TechnicalSkillCategory } from "@domain";

/**
 * @description Catálogo de habilidades técnicas por especialidad.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const TECHNICAL_SKILLS: readonly TechnicalSkillCategory[] = [
  {
    id: "frontend",
    titleKey: "technicalSkills.categories.frontend.title",
    descriptionKey: "technicalSkills.categories.frontend.description",
    symbol: "</>",
    technologies: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    titleKey: "technicalSkills.categories.backend.title",
    descriptionKey: "technicalSkills.categories.backend.description",
    symbol: "{ }",
    technologies: ["Python", "FastAPI", "Node.js", "NestJS", "REST APIs"],
  },
  {
    id: "cloud",
    titleKey: "technicalSkills.categories.cloud.title",
    descriptionKey: "technicalSkills.categories.cloud.description",
    symbol: "☁",
    technologies: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Linux"],
  },
  {
    id: "data",
    titleKey: "technicalSkills.categories.data.title",
    descriptionKey: "technicalSkills.categories.data.description",
    symbol: "AI",
    technologies: [
      "Python",
      "Pandas",
      "Machine Learning",
      "SQL",
      "Data Visualization",
    ],
  },
  {
    id: "databases",
    titleKey: "technicalSkills.categories.databases.title",
    descriptionKey: "technicalSkills.categories.databases.description",
    symbol: "DB",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "SQLAlchemy"],
  },
  {
    id: "architecture",
    titleKey: "technicalSkills.categories.architecture.title",
    descriptionKey: "technicalSkills.categories.architecture.description",
    symbol: "◇",
    technologies: [
      "Clean Architecture",
      "Hexagonal Architecture",
      "Domain-Driven Design",
      "Automated Testing",
    ],
  },
] as const;
