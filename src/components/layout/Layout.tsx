import type { ReactElement } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Menu } from "../../contexts/Menu";
import { Options } from "./Options";

interface LayoutProps {
  children: ReactElement;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <Header />
      {children}
      <Footer />
      <Menu />
      <Options />
    </div>
  );
}
