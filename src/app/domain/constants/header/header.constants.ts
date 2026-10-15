import type { IHeaderNavigationItem } from "@domain";

/**
 * @description Configuración jerárquica de la navegación principal.
 * Los elementos sin hijos no muestran flechas ni submenús.
 * @author Steveen Cues
 * @version 1.0.0
 */
export const HEADER_NAVIGATION_ITEMS: readonly IHeaderNavigationItem[] = [
  {
    id: "services",
    labelKey: "navigation.services",
    href: "#services",
    children: [
      {
        id: "web-development",
        labelKey: "navigation.webDevelopment",
        href: "#service-web",
      },
      {
        id: "mobile-development",
        labelKey: "navigation.mobileDevelopment",
        href: "#service-mobile",
      },
      {
        id: "artificial-intelligence",
        labelKey: "navigation.artificialIntelligence",
        href: "#service-ai",
      },
      {
        id: "cloud-devops",
        labelKey: "navigation.cloudDevOps",
        href: "#service-cloud",
      },
    ],
  },
  {
    id: "case-studies",
    labelKey: "navigation.caseStudies",
    href: "#projects",
    children: [
      {
        id: "business-platform",
        labelKey: "navigation.businessPlatform",
        href: "#business-platform",
      },
      {
        id: "cloud-platform",
        labelKey: "navigation.cloudPlatform",
        href: "#cloud-platform",
      },
      {
        id: "data-platform",
        labelKey: "navigation.dataPlatform",
        href: "#data-platform",
      },
    ],
  },
  {
    id: "stack",
    labelKey: "navigation.stack",
    href: "#technical-skills",
    children: [
      {
        id: "frontend",
        labelKey: "navigation.frontend",
        href: "#skill-frontend",
      },
      {
        id: "backend",
        labelKey: "navigation.backend",
        href: "#skill-backend",
      },
      {
        id: "cloud-skills",
        labelKey: "navigation.cloudDevOps",
        href: "#skill-cloud",
      },
      {
        id: "data",
        labelKey: "navigation.data",
        href: "#skill-data",
      },
      {
        id: "databases",
        labelKey: "navigation.databases",
        href: "#skill-databases",
      },
      {
        id: "architecture",
        labelKey: "navigation.architecture",
        href: "#skill-architecture",
      },
    ],
  },
  {
    id: "about",
    labelKey: "navigation.about",
    href: "#about",
  },
] as const;
