import { useGameStatusStore } from "../../store/gameStatus";

export function GamePlay() {
  const { targets, hitTarget, toImage } = useGameStatusStore();

  return (
    <section className="flex flex-wrap items-center justify-center gap-2 p-2">
      {targets.map((target, key) => (
        <button
          key={key}
          onClick={() => hitTarget(key)}
          className="flex aspect-square basis-1/4 flex-col justify-end border p-2"
        >
          <img src={toImage(target)} />
          {key}
        </button>
      ))}
    </section>
  );
}
