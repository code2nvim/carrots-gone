import { GamePlay } from "../components/game/Play";
import { GameStatus } from "../components/game/Status";

export default function Game() {
  return (
    <div className="size-full">
      <header className="bg-black p-2 text-center text-xl text-white">
        Rabbits Game
      </header>
      <main className="flex size-full items-center justify-evenly bg-green-500">
        <GamePlay />
        <GameStatus />
      </main>
    </div>
  );
}
