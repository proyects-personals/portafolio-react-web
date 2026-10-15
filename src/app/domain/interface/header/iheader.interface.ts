/**
 * @description Define un enlace hijo de navegación.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IHeaderNavigationChild {
  readonly id: string;
  readonly labelKey: string;
  readonly href: string;
}

/**
 * @description Define un elemento de navegación con hijos opcionales.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface IHeaderNavigationItem extends IHeaderNavigationChild {
  readonly children?: readonly IHeaderNavigationChild[];
}
