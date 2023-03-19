"use client";
import { Container } from "@/components/container";
import { Dashboard } from "@/components/dashboard";
import { Loading } from "@/components/loading";
import { NavMenu } from "@/components/nav_menu";
import { AnimationContextProvider } from "@/context/animation_context";
import { SectionContextProvider } from "@/context/section_context";
import { Suspense } from "react";
import "../styles/global.css";
import LoadingPage from "./loading";
import StyledComponentsRegistry from "./registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="pt-br">
      <head />
      <body>
        <StyledComponentsRegistry>
        <Suspense fallback={<LoadingPage />}>
          <Container>
            <AnimationContextProvider>
              <SectionContextProvider>
                <Dashboard>{children}</Dashboard>
                <NavMenu />
              </SectionContextProvider>
            </AnimationContextProvider>
          </Container>
        </Suspense>
        </StyledComponentsRegistry>
       
      </body>
    </html>
  );
}
