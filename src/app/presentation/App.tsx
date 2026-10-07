import { useLanguage, useTheme } from "@application";
import Header from "@presentation/shared/layout/Header";

import type { JSX } from "react";

export default function App(): JSX.Element {
  const { t, changeTranslate } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
      }}
    >
      {/* Componente Header importado correctamente */}
      <Header />

      {/* Contenido Principal */}
      <div
        className="w-full max-w-md rounded-xl p-6 shadow mt-16"
        style={{ backgroundColor: theme.colors.primary }}
      >
        <h1 className="text-2xl font-bold mb-4">
          {t("scaffolding.page.title")}
        </h1>

        <p className="mb-6">{t("scaffolding.page.description")}</p>

        {/* Idioma */}
        <div className="flex gap-3 justify-center mb-4">
          <button
            onClick={() => changeTranslate("es")}
            className="px-4 py-2 rounded bg-white/20"
          >
            ES
          </button>

          <button
            onClick={() => changeTranslate("en")}
            className="px-4 py-2 rounded bg-white/20"
          >
            EN
          </button>
        </div>

        {/* Tema */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setTheme("light")}
            className="px-4 py-2 rounded bg-white/20"
          >
            Light
          </button>

          <button
            onClick={() => setTheme("dark")}
            className="px-4 py-2 rounded bg-white/20"
          >
            Dark
          </button>
          <button
            onClick={() => setTheme("magenta")}
            className="px-4 py-2 rounded bg-white/20"
          >
            otro
          </button>
        </div>
      </div>
    </div>
  );
}
