import { createContext, useContext, useState, type ReactElement } from "react";
import Home from "../pages/Home";
import Game from "../Game";
import Chat from "../Chat";

type Page = "Local" | "Home" | "Chat" | "Game";

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
      <button onClick={() => page.goto("Chat")}>Chat</button>
      {
        //<button onClick={() => page.goto("Game")}>Game</button>
      }
    </nav>
  );
}

export function CurrentPage() {
  const page = useContext(PageContext);

  const [current, setCurrent] = useState<Page>("Local");

  if (current == "Local") {
    const local = sessionStorage.getItem("page") as Page;
    setCurrent(local || "Home");
  }

  page.goto = (current: Page) => {
    sessionStorage.setItem("page", current);
    setCurrent(current);
  };

  switch (current) {
    case "Home":
      return <Home />;
    case "Chat":
      return <Chat />;
    case "Game":
      return <Game />;
  }
}
