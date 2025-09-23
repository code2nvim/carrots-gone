import { GamePlay } from "../components/game/Play";
import { GameStatus } from "../components/game/Status";

export default function Game() {
  return (
    <>
      <header className="bg-black p-2 text-center text-xl text-white">
        Rabbits Game
      </header>
      <main className="grow bg-green-500">
        <GamePlay />
        <GameStatus />
      </main>
    </>
  );
}
