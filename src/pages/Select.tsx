import Chat from "../Chat";
import Game from "../Game";
import { useSelectPageStore } from "../store/selectPage";

export function Select() {
  const { page } = useSelectPageStore();

  return (
    <>
      {page === "chat" && <Chat />}
      {page === "game" && <Game />}
      <SelectButton />
    </>
  );
}

function SelectButton() {
  const { page, setPage } = useSelectPageStore();

  const toggle = () => setPage(page == "chat" ? "game" : "chat");

  return (
    <button
      onClick={toggle}
      className="absolute bottom-0 m-2 aspect-square rounded-full border border-gray-500 px-2 text-white"
    >
      -
    </button>
  );
}
