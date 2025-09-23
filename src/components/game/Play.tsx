import { useGameStatusStore } from "../../store/gameStatus";

export function GamePlay() {
  const { targets, addScore, toImage } = useGameStatusStore();

  return (
    <section className="flex flex-wrap items-center justify-center gap-2 p-2">
      {targets.map((target, key) => (
        <button key={key} onClick={addScore} className="basis-1/4">
          <img src={toImage(target)} className="aspect-square border p-2" />
          {key}
        </button>
      ))}
    </section>
  );
}
