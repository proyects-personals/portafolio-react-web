import { useLanguage, useTheme } from "@application";

import type { HeaderRingcolor } from "@presentation";
import type { JSX, MouseEvent } from "react";

/**
 * @description Renderiza las acciones principales de la cabecera con
 * estilos adaptados al tema activo y diseño responsive (oculto en móviles para ahorrar espacio).
 * @author Steveen Cues
 * @version 1.3.0
 */
export default function HeaderActions(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  const actionStyle: HeaderRingcolor = {
    backgroundColor: colors.brand.primary,
    color: colors.brand.primaryContrast,
    boxShadow: colors.shadow.small,
    "--tw-ring-color": colors.border.focus,
  };

  const handleMouseEnter = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.currentTarget.style.backgroundColor = colors.brand.primaryHover;
  };

  const handleMouseLeave = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.currentTarget.style.backgroundColor = colors.brand.primary;
  };

  return (
    <div className="hidden shrink-0 items-center sm:flex">
      <a
        href="#contact"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="
          inline-flex items-center justify-center rounded-full
          px-4 py-2 text-xs font-semibold tracking-wide
          transition-all duration-300 ease-in-out
          hover:-translate-y-0.5 hover:shadow-md
          active:translate-y-0 active:scale-95
          focus:outline-none focus:ring-2 focus:ring-offset-2
          sm:px-6 sm:py-2.5 sm:text-sm
        "
        style={actionStyle}
      >
        <span>{t("navigation.consultation")}</span>
      </a>
    </div>
  );
}
