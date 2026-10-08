import HeaderLanguage from "./HeaderLanguage";
import HeaderTheme from "./HeaderTheme";

import type { JSX } from "react";

/**
 * @description Controles de preferencias del header.
 *
 * @returns {JSX.Element} Preferencias de idioma y tema
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function HeaderPreferences(): JSX.Element {
  return (
    <div className="flex items-center gap-2">
      <HeaderLanguage />
      <HeaderTheme />
    </div>
  );
}
