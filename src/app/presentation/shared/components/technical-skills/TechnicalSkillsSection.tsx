import { useTheme } from "@application";
import { TECHNICAL_SKILLS } from "@domain";
import { TechnicalSkillCard, TechnicalSkillsHeading } from "@presentation";

import type { JSX } from "react";

/**
 * @description Compone la sección de habilidades técnicas de la empresa.
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function TechnicalSkillsSection(): JSX.Element {
  const { theme } = useTheme();
  const { colors } = theme;

  return (
    <section
      id="technical-skills"
      aria-labelledby="technical-skills-heading"
      className="relative isolate overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      style={{ backgroundColor: colors.surface.background }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-0 -z-10 size-80 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: colors.brand.primary }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <TechnicalSkillsHeading />

        <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNICAL_SKILLS.map((skill, index) => (
            <TechnicalSkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
