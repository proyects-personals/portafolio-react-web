import { useLanguage, useTheme } from "@application";
import { HEADER_NAVIGATION_ITEMS, type IHeaderNavigationChild } from "@domain";
import { ChevronIcon, type HeaderRingcolor } from "@presentation";

import type { JSX, MouseEvent } from "react";

/**
 * @description Restablece el fondo de un enlace de navegación.
 * @author Steveen Cues
 * @version 1.0.0
 */
function handleMouseLeave(event: MouseEvent<HTMLAnchorElement>): void {
  event.currentTarget.style.backgroundColor = "transparent";
}

/**
 * @description Navegación principal responsive con enlaces y submenús
 * generados desde una configuración jerárquica.
 * @author Steveen Cues
 * @version 2.1.0
 */
export default function HeaderNavigation(): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { colors } = theme;

  const linkStyle: HeaderRingcolor = {
    color: colors.text.primary,
    backgroundColor: "transparent",
    "--tw-ring-color": colors.border.focus,
  };

  const handleMouseEnter = (event: MouseEvent<HTMLAnchorElement>): void => {
    event.currentTarget.style.backgroundColor = colors.surface.surfaceHover;
  };

  const renderLink = (
    item: IHeaderNavigationChild,
    hasChildren: boolean,
  ): JSX.Element => (
    <a
      href={item.href}
      aria-haspopup={hasChildren ? "true" : undefined}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
        group flex items-center gap-1.5 rounded-lg px-3 py-2
        text-sm font-medium transition-colors duration-200
        focus:outline-none focus:ring-2
      "
      style={linkStyle}
    >
      <span>{t(item.labelKey)}</span>

      {hasChildren && (
        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-y-0.5"
        >
          <ChevronIcon />
        </span>
      )}
    </a>
  );

  return (
    <nav
      className="hidden items-center gap-1 md:flex lg:gap-2"
      aria-label={t("navigation.main")}
    >
      <ul className="flex items-center gap-1 lg:gap-2">
        {HEADER_NAVIGATION_ITEMS.map((item) => {
          const children = item.children ?? [];
          const hasChildren = children.length > 0;

          return (
            <li
              key={item.id}
              className={hasChildren ? "group/nav-item relative" : "relative"}
            >
              {renderLink(item, hasChildren)}

              {hasChildren && (
                <ul
                  className="
                    invisible absolute top-full left-0 z-50 mt-2
                    min-w-56 translate-y-1 rounded-xl border p-2
                    opacity-0 shadow-xl
                    transition-all duration-200
                    group-hover/nav-item:visible
                    group-hover/nav-item:translate-y-0
                    group-hover/nav-item:opacity-100
                    group-focus-within/nav-item:visible
                    group-focus-within/nav-item:translate-y-0
                    group-focus-within/nav-item:opacity-100
                  "
                  style={{
                    backgroundColor: colors.surface.surfaceElevated,
                    borderColor: colors.border.subtle,
                    boxShadow: colors.shadow.medium,
                  }}
                >
                  {children.map((child) => (
                    <li key={child.id}>{renderLink(child, false)}</li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
