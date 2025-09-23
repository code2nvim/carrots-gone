import Hole from "/hole.svg";
import { useGameStatusStore } from "../../store/gameStatus";

export function GamePlay() {
  const { addScore } = useGameStatusStore();

  const targets = Array.from({ length: 9 }, (_, index) => index);

  return (
    <section className="flex">
      {targets.map((key) => (
        <button key={key} onClick={addScore}>
          <img src={Hole} className="aspect-square" />
        </button>
      ))}
    </section>
  );
}
