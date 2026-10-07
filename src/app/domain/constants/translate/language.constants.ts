import { createContext } from "react";

import type { TranslateContextType } from "../../interface";
import type { Language } from "../../type";

/**
 * @description Clave utilizada para almacenar el idioma seleccionado.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LANGUAGE_STORAGE_KEY = "app_language";

/**
 * @description Cantidad de caracteres utilizada para obtener
 * el código principal del idioma del navegador.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export const LANGUAGE_CODE_LENGTH = 2;

/**
 * @description Idioma utilizado cuando no existe una preferencia válida.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export const DEFAULT_LANGUAGE = "es";

/**
 * @description Lista de idiomas soportados por la aplicación.
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export const SUPPORTED_LANGUAGES: Language[] = [
  "es",
  "en",
  "fr",
  "de",
  "it",
  "pt",
];

export const TranslateContext = createContext<TranslateContextType | undefined>(
  undefined,
);
