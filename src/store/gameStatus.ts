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
  addScore: () => void;
  toImage: (target: Target) => string;
}

export const useGameStatusStore = create<GameStatusStore>((set) => ({
  score: 0,
  status: "start",
  targets: Array(9).fill("carrot"),
  addScore: () =>
    set((state) => ({
      score: state.score + 1,
    })),
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
