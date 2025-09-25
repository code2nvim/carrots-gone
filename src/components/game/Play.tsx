import { useEffect } from "react";
import { useGameStatusStore, type Target } from "../../store/gameStatus";
import carrot from "/carrot.svg";
import hole from "/hole.svg";
import rabbit from "/rabbit.svg";

function toImage(target: Target) {
  switch (target) {
    case "carrot":
      return carrot;
    case "hole":
      return hole;
    case "rabbit":
      return rabbit;
  }
}

export function GamePlay() {
  const { targets, hitTarget } = useGameStatusStore();

  return (
    <section className="flex aspect-square max-h-full flex-wrap items-center justify-center p-2">
      {targets.map((target, key) => (
        <button
          key={key}
          onClick={() => hitTarget(key)}
          className="flex aspect-square basis-1/3 flex-col justify-end p-2"
        >
          <img src={toImage(target.target)} />
        </button>
      ))}
    </section>
  );
}
