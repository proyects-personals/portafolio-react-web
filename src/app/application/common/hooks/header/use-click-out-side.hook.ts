import { useEffect } from "react";

/**
 * @description Detecta clics realizados fuera del elemento referenciado.
 *
 * @param {React.RefObject<HTMLElement | null>} ref Referencia del elemento.
 * @param {() => void} onOutsideClick Callback ejecutado al hacer clic fuera.
 *
 * @returns {void}
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export function useClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  onOutsideClick: () => void,
): void {
  useEffect((): (() => void) => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const target = event.target;

      if (
        target instanceof Node &&
        ref.current !== null &&
        !ref.current.contains(target)
      ) {
        onOutsideClick();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return (): void => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onOutsideClick, ref]);
}
