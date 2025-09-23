import { create } from "zustand";

type Status = "start" | "playing" | "over";

export type Target = "carrot" | "hole" | "rabbit";

interface GameStatusStore {
  score: number;
  status: Status;
  targets: Array<{ target: Target; timeout: number }>;
  start: () => void;
  hitTarget: (key: number) => void;
}

export const useGameStatusStore = create<GameStatusStore>((set, get) => ({
  score: 0,
  status: "start",
  targets: Array(9).fill({ target: "hole", timeout: 0 }),
  start: () => {
    set({
      status: "playing",
      targets: Array(9).fill({ target: "carrot", timeout: 0 }),
    });
  },
  hitTarget: (key) => {
    if (get().targets[key].target === "carrot") {
      set((state) => {
        const newTargets = [...state.targets];
        newTargets[key] = { target: "hole", timeout: 0 };
        return {
          score: state.score + 1,
          targets: newTargets,
        };
      });
    }
  },
}));
