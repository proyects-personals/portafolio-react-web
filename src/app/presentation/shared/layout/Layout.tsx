import { useTheme } from "@application";
import { Footer, Header, PageWrapper } from "@presentation";

import type { JSX, ReactNode } from "react";

/**
 * @description Propiedades del componente AppLayout.
 */
interface AppLayoutProps {
  readonly children: ReactNode;
}

/**
 * @description Layout global de la aplicación integrado con el Grid de PageWrapper.
 *
 * @param {AppLayoutProps} props Propiedades del layout.
 * @returns {JSX.Element} Layout principal de la aplicación.
 *
 * @author Steveen Cues
 * @version 1.2.0
 */
export default function AppLayout({ children }: AppLayoutProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: theme.colors.surface.background,
        color: theme.colors.text.primary,
      }}
    >
      <PageWrapper>
        <Header isFixed />

        <main
          className="
            col-span-4 min-w-0
            px-4 pt-24 pb-12
            sm:px-6 sm:pt-28 sm:pb-16
            md:col-span-8
            lg:col-span-12 lg:px-10 lg:pt-32 lg:pb-20
            xl:px-12
          "
        >
          {children}
        </main>

        <Footer />
      </PageWrapper>
    </div>
  );
}
