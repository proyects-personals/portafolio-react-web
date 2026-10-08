import { createContext } from "react";

import { darkTheme } from "@/assets/styles/theme/dark.theme";
import { lightTheme } from "@/assets/styles/theme/light.theme";
import { magentaTheme } from "@/assets/styles/theme/magenta.theme";
import { semiDarkTheme } from "@/assets/styles/theme/semi-dark.theme";

import type { AppTheme, ThemeContextValue } from "../../interface";
import type { ThemeName } from "../../type";

export const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * @description Clave utilizada para almacenar la configuración del tema.
 */
export const STORAGE_KEY = "app_theme";

export const THEME_NAMES: ThemeName[] = [
  "light",
  "dark",
  "magenta",
  "semidark",
];

export const THEMES: Record<ThemeName, AppTheme> = {
  light: lightTheme,
  dark: darkTheme,
  magenta: magentaTheme,
  semidark: semiDarkTheme,
};

export const THEME_OPTIONS = [
  {
    value: "light",
    label: "Light",
    icon: "☀️",
  },
  {
    value: "dark",
    label: "Dark",
    icon: "🌙",
  },
  {
    value: "magenta",
    label: "Magenta",
    icon: "💗",
  },
  {
    value: "semidark",
    label: "Semi Dark",
    icon: "◐",
  },
] satisfies ReadonlyArray<{
  value: ThemeName;
  label: string;
  icon: string;
}>;
