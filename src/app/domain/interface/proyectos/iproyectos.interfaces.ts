/**
 * @description Define el modelo de un proyecto o caso de estudio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface CaseStudy {
  readonly id: string;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly technologies: readonly string[];
}
