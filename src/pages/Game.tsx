import { GamePlay } from "../components/game/Play";
import { GameStatus } from "../components/game/Status";

export default function Game() {
  return (
    <main className="grow bg-green-500">
      <GamePlay />
      <GameStatus />
    </main>
  );
}
