import { useTheme } from "@application";
import {
  HeaderActions,
  HeaderBrand,
  HeaderLanguage,
  HeaderNavigation,
  HeaderTheme,
} from "@presentation";

import type { JSX } from "react";

/**
 * @description Propiedades del componente Header.
 * @author Steveen Cues
 * @version 1.0.0
 */
interface IHeaderProps {
  /**
   * @description Define si la cabecera permanece fija en la parte superior.
   * @default true
   */
  readonly isFixed?: boolean;
}

/**
 * @description Renderiza la cabecera responsive con navegación, marca,
 * selector de idioma y selector de tema dentro del sistema de Grid con distribución optimizada.
 * @author Steveen Cues
 * @version 2.3.0
 */
export default function Header({ isFixed = true }: IHeaderProps): JSX.Element {
  const { theme } = useTheme();
  const { colors } = theme;

  const headerStyle = {
    backgroundColor: isFixed
      ? colors.effects.glassBackground
      : colors.surface.background,
    borderColor: colors.border.subtle,
    boxShadow: isFixed ? colors.shadow.subtle : "none",
  };

  const headerPositionClass = isFixed
    ? "fixed inset-x-0 top-0 z-50 backdrop-blur-md"
    : "relative";

  return (
    <header
      className={`
        ${headerPositionClass}
        col-span-4 min-w-0 border-b
        py-3 transition-all duration-300
        md:col-span-8 md:py-4
        lg:col-span-12 lg:py-5
      `}
      style={headerStyle}
    >
      <div
        className="
          mx-auto flex min-h-12 w-full max-w-[1600px] items-center
          justify-between gap-2 px-4
          sm:px-6 md:min-h-12 md:gap-6 lg:px-10 xl:px-12
        "
      >
        <div className="min-w-0 shrink-0 sm:max-w-none">
          <HeaderBrand />
        </div>

        <div className="hidden min-w-0 flex-1 justify-center md:flex">
          <HeaderNavigation />
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5 md:gap-3">
          <HeaderLanguage />
          <HeaderTheme />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}
