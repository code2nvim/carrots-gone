import { useGameStatusStore } from "../../store/gameStatus";

export function GamePlay() {
  const { addScore } = useGameStatusStore();

  return <button onClick={addScore}>GamePlay</button>;
}
