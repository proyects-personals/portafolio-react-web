import { THEME_OPTIONS } from "@/app/domain";
import { useTheme } from "@application";

import HeaderPreferenceSelect from "./HeaderPreferenceSelect";

import type { JSX } from "react";

/**
 * @description Selector compacto de tema para el header.
 *
 * @returns {JSX.Element} Selector de tema
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function HeaderTheme(): JSX.Element {
  const { themeName, setTheme } = useTheme();

  return (
    <HeaderPreferenceSelect
      value={themeName}
      options={[...THEME_OPTIONS]}
      onChange={setTheme}
      ariaLabel="Seleccionar tema"
      compact
    />
  );
}
