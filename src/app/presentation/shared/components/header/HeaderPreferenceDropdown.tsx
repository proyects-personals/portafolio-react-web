import { useLanguage, useTheme } from "@application";
import {
  HeaderPreferenceOption,
  HeaderPreferenceSearch,
  type IHeaderPreferenceDropdownProps,
} from "@presentation";

import type { JSX } from "react";

/**
 * @description Cantidad máxima de opciones antes de habilitar búsqueda.
 */
const MAX_VISIBLE_OPTIONS = 6;

/**
 * @description Dropdown moderno y reutilizable para seleccionar preferencias.
 *
 * @template T Tipo del valor.
 *
 * @param {IHeaderPreferenceDropdownProps<T>} props Propiedades del dropdown.
 * @returns {JSX.Element} Dropdown de preferencias.
 *
 * @author Steveen Cues
 * @version 1.1.0 (Modernizado)
 */
export default function HeaderPreferenceDropdown<T extends string>({
  options,
  filteredOptions,
  value,
  search,
  inputRef,
  ariaLabel,
  onSearchChange,
  onSelect,
}: IHeaderPreferenceDropdownProps<T>): JSX.Element {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const hasManyOptions = options.length > MAX_VISIBLE_OPTIONS;

  return (
    <div
      className="
        absolute
        right-0
        top-full
        z-50
        mt-3
        w-64
        overflow-hidden
        rounded-2xl
        border
      "
      style={{
        backgroundColor: theme.colors.surface.surfaceElevated,
        borderColor: theme.colors.border.default,
        boxShadow: theme.colors.shadow.large || theme.colors.shadow.medium,
      }}
    >
      {hasManyOptions && (
        <div
          className="p-3 border-b"
          style={{ borderColor: theme.colors.border.default }}
        >
          <HeaderPreferenceSearch
            value={search}
            inputRef={inputRef}
            ariaLabel={ariaLabel}
            onChange={onSearchChange}
          />
        </div>
      )}

      {/* Lista de Opciones - Con padding y espaciado entre elementos */}
      <div
        className={`
          p-2 // Padding contenedor interno
          flex flex-col gap-1 // Espaciado entre opciones
          ${hasManyOptions ? "max-h-72 overflow-y-auto" : ""}
        `}
        role="listbox"
      >
        {filteredOptions.length > 0 ? (
          filteredOptions.map((option): JSX.Element => (
            <HeaderPreferenceOption
              key={option.value}
              option={option}
              selected={option.value === value}
              onSelect={onSelect}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
            <p
              className="text-sm font-normal"
              style={{
                color: theme.colors.text.muted,
              }}
            >
              {t("header.preferences.search.noResults")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
