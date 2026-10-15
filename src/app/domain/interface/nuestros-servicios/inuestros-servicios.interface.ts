import type { ServiceIconName } from "@domain";

/**
 * @description Define la estructura de un servicio corporativo.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ServiceItem {
  readonly id: string;
  readonly titleKey: string;
  readonly descriptionKey: string;
  readonly icon: ServiceIconName;
}
