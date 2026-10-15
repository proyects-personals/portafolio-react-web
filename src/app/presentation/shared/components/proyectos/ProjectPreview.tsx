import { useTheme } from "@application";

import type { ProjectPreviewProps } from "@presentation";
import type { JSX } from "react";

const PROJECT_NUMBER_WIDTH = 2;
const MAX_PREVIEW_TECHNOLOGIES = 3;

/**
 * @description Renderiza una portada visual para la tarjeta del proyecto.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function ProjectPreview({
  index,
  technologies,
}: ProjectPreviewProps): JSX.Element {
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <div
      aria-hidden="true"
      className="relative isolate aspect-[16/10] overflow-hidden border-b p-5 sm:p-6"
      style={{
        backgroundColor: colors.surface.background,
        borderColor: colors.border.subtle,
      }}
    >
      <div
        className="pointer-events-none absolute -top-16 -right-12 -z-10 size-48 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: colors.brand.primary }}
      />

      <div
        className="pointer-events-none absolute -bottom-20 -left-12 -z-10 size-48 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: colors.brand.secondary }}
      />

      <div
        className="h-full overflow-hidden rounded-xl border"
        style={{
          backgroundColor: colors.surface.surface,
          borderColor: colors.border.subtle,
          boxShadow: colors.shadow.medium,
        }}
      >
        <div
          className="flex h-9 items-center gap-1.5 border-b px-3"
          style={{ borderColor: colors.border.subtle }}
        >
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: colors.state.error }}
          />
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: colors.state.warning }}
          />
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: colors.state.success }}
          />

          <div
            className="ml-3 h-2.5 max-w-32 flex-1 rounded-full opacity-60"
            style={{ backgroundColor: colors.border.default }}
          />
        </div>

        <div className="grid h-[calc(100%-2.25rem)] grid-cols-[minmax(0,0.7fr)_minmax(0,1.8fr)] gap-3 p-3 sm:gap-4 sm:p-4">
          <div className="flex flex-col gap-2">
            <div
              className="h-3 w-full rounded-md opacity-80"
              style={{ backgroundColor: colors.brand.primary }}
            />

            <div
              className="h-2 w-4/5 rounded-full"
              style={{ backgroundColor: colors.border.default }}
            />

            <div
              className="h-2 w-3/5 rounded-full"
              style={{ backgroundColor: colors.border.default }}
            />

            <div
              className="mt-2 h-7 rounded-lg"
              style={{ backgroundColor: colors.effects.glassBackground }}
            />
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <div
              className="flex flex-1 items-center justify-center rounded-xl border"
              style={{
                backgroundColor: colors.effects.glassBackground,
                borderColor: colors.border.subtle,
              }}
            >
              <span
                className="text-3xl font-black tracking-tighter transition-transform duration-300 group-hover:scale-110 sm:text-4xl"
                style={{ color: colors.brand.primary }}
              >
                {"</>"}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {technologies
                .slice(0, MAX_PREVIEW_TECHNOLOGIES)
                .map((technology) => (
                  <div
                    key={technology}
                    className="h-2 rounded-full opacity-20"
                    style={{ backgroundColor: colors.brand.primary }}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>

      <span
        className="absolute top-3 right-3 rounded-full border px-3 py-1 text-xs font-bold backdrop-blur-md"
        style={{
          color: colors.text.primary,
          backgroundColor: colors.effects.glassBackground,
          borderColor: colors.border.subtle,
        }}
      >
        {String(index + 1).padStart(PROJECT_NUMBER_WIDTH, "0")}
      </span>
    </div>
  );
}
