import type { ServiceIconName, ServiceItem } from "@domain";
import type { JSX } from "react";

export const COMPANY_SERVICES: readonly ServiceItem[] = [
  {
    id: "web",
    titleKey: "services.web.title",
    descriptionKey: "services.web.description",
    icon: "monitor",
  },
  {
    id: "mobile",
    titleKey: "services.mobile.title",
    descriptionKey: "services.mobile.description",
    icon: "smartphone",
  },
  {
    id: "ai",
    titleKey: "services.ai.title",
    descriptionKey: "services.ai.description",
    icon: "brain-circuit",
  },
  {
    id: "cloud",
    titleKey: "services.cloud.title",
    descriptionKey: "services.cloud.description",
    icon: "cloud",
  },
] as const;

export const SERVICE_ICONS: Record<ServiceIconName, JSX.Element> = {
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  smartphone: (
    <>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  "brain-circuit": (
    <>
      <path d="M12 18V5a3 3 0 0 0-5.8-1A4 4 0 0 0 5 11a4 4 0 0 0 2 7h5" />
      <path d="M12 8a3 3 0 0 1 5.8-1A4 4 0 0 1 19 14a4 4 0 0 1-2 7h-5" />
      <path d="M9 8h3m3 5h-3m-3 4h3" />
    </>
  ),
  cloud: (
    <>
      <path d="M7 18h11a4 4 0 0 0 .5-8A6.5 6.5 0 0 0 6 8.5 4.8 4.8 0 0 0 7 18Z" />
      <path d="m9 14 3-3 3 3m-3-3v7" />
    </>
  ),
};
