import { useGameStatusStore } from "../../store/gameStatus";

export function GameStatus() {
  const { score } = useGameStatusStore();

  return (
    <section className="w-min rounded-md bg-green-600 p-2 text-white">
      <h2 className="w-max">Score: {score}</h2>
      <button>START</button>
    </section>
  );
}
