import { createContext, useContext, useState, type ReactElement } from "react";
import { Home } from "../pages/Home";

type Page = "Local" | "Home" | "Game";

function goto(page: Page) {
  throw Error(`goto("${page}"): context has not been assigned yet!`);
}

const PageContext = createContext({ goto: goto });

interface PageProviderProps {
  children: ReactElement;
}

export function PageProvider({ children }: PageProviderProps) {
  return <PageContext value={{ goto: goto }}>{children}</PageContext>;
}

export function SelectPage() {
  const page = useContext(PageContext);

  return (
    <nav className="flex flex-col">
      <button onClick={() => page.goto("Home")}>Home</button>
      <button onClick={() => page.goto("Game")}>Game</button>
    </nav>
  );
}

export function CurrentPage() {
  const page = useContext(PageContext);

  const [current, setCurrent] = useState<Page>("Local");

  if (current == "Local") {
    const local = localStorage.getItem("page") as Page;
    setCurrent(local || "Home");
  }

  page.goto = (current: Page) => {
    localStorage.setItem("page", current);
    setCurrent(current);
  };

  switch (current) {
    case "Home":
      return <Home />;
    case "Game":
      return <>Game</>;
  }
}
