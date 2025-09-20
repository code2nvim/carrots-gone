import type { ReactElement } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactElement;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="absolute flex size-full flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
