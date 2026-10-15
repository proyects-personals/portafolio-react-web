import type { CaseStudy } from "@domain";

/**
 * @description Define las propiedades de una tarjeta de proyecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ProjectCardProps {
  readonly project: CaseStudy;
  readonly index: number;
}

/**
 * @description Propiedades de la portada visual de un proyecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ProjectPreviewProps {
  readonly index: number;
  readonly technologies: readonly string[];
}

/**
 * @description Propiedades de la lista de tecnologías de un proyecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ProjectTechnologyListProps {
  readonly technologies: readonly string[];
}
