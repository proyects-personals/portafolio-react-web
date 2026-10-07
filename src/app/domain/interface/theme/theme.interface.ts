import type { ThemeName } from "../../type";
import type { ReactNode } from "react";

/**
 * @description Valor expuesto por el ThemeContext.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeContextValue {
  theme: AppTheme;
  themeName: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

/**
 * @description Props del ThemeProvider.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * @description Representa un tema completo de la aplicación.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface AppTheme {
  name: ThemeName;
  colors: {
    background: string;
    text: string;
    primary: string;
  };
}
