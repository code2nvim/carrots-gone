import { useGameStatusStore } from "../../store/gameStatus";

export function GameStatus() {
  const { score } = useGameStatusStore();

  return <div>{score}</div>;
}
