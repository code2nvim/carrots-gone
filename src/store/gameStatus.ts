import { create } from "zustand";
import carrot from "/carrot.svg";
import hole from "/hole.svg";
import rabbit from "/rabbit.svg";

type Status = "start" | "playing" | "over";

type Target = "carrot" | "hole" | "rabbit";

interface GameStatusStore {
  score: number;
  status: Status;
  targets: Array<Target>;
  hitTarget: (key: number) => void;
  toImage: (target: Target) => string;
}

export const useGameStatusStore = create<GameStatusStore>((set, get) => ({
  score: 0,
  status: "start",
  targets: Array(9).fill("carrot"),
  hitTarget: (key) => {
    if (get().targets[key] === "carrot") {
      set((state) => {
        const newTargets = [...state.targets];
        newTargets[key] = "hole";
        return {
          score: state.score + 1,
          targets: newTargets,
        };
      });
    }
  },
  toImage: (target: Target) => {
    switch (target) {
      case "carrot":
        return carrot;
      case "hole":
        return hole;
      case "rabbit":
        return rabbit;
    }
  },
}));
