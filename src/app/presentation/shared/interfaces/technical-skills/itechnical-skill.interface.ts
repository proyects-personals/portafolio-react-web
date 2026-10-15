import type { TechnicalSkillCategory } from "@domain";

/**
 * @description Define las propiedades de una tarjeta de habilidad técnica.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface TechnicalSkillCardProps {
  readonly skill: TechnicalSkillCategory;
  readonly index: number;
}
