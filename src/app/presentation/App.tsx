import {
  AppLayout,
  HeroCarousel,
  ProjectsSection,
  ServicesSection,
  TechnicalSkillsSection,
} from "@presentation";

import type { JSX } from "react";

export default function App(): JSX.Element {
  return (
    <AppLayout>
      <HeroCarousel />
      <ServicesSection />
      <ProjectsSection />
      <TechnicalSkillsSection />
    </AppLayout>
  );
}
