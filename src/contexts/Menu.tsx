import { createContext, useContext, useState, type ReactElement } from "react";

function toggle() {
  throw Error("Menu: not been assigned!");
}

const MenuContext = createContext({ toggle: toggle });

interface MenuProviderProps {
  children: ReactElement;
}

export function MenuProvider({ children }: MenuProviderProps) {
  return <MenuContext value={{ toggle: toggle }}> {children}</MenuContext>;
}

export function Menu() {
  const menu = useContext(MenuContext);
  const [show, setShow] = useState(false);

  menu.toggle = () => setShow((show) => !show);

  return (
    <>
      {show && (
        <div
          onClick={() => setShow(false)}
          className="absolute flex min-h-screen w-full flex-col items-center bg-black opacity-70"
        >
          <nav className="top-[30%] text-white">
            <>nav</>
          </nav>
        </div>
      )}
    </>
  );
}

export function MenuButton() {
  const menu = useContext(MenuContext);

  return (
    <button onClick={() => menu.toggle()}>
      <>button</>
    </button>
  );
}
