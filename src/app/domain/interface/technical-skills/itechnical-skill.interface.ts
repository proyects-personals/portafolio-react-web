/**
 * @description Define una categoría de habilidades técnicas de la empresa.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface TechnicalSkillCategory {
  readonly id: string;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly symbol: string;
  readonly technologies: readonly string[];
}
