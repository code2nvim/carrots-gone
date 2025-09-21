import type { ReactElement } from "react";

interface LayoutProps {
  children: ReactElement;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="absolute flex size-full flex-col justify-between">
      {children}
    </div>
  );
}
