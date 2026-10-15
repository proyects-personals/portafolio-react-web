import type { ServiceIconName, ServiceItem } from "@domain";

/**
 * @description Define las propiedades del icono de servicio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ServiceIconProps {
  readonly name: ServiceIconName;
}

/**
 * @description Define las propiedades de la tarjeta de servicio.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ServiceCardProps {
  readonly service: ServiceItem;
  readonly index: number;
}
