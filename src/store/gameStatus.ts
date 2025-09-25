import { create } from "zustand";

const TIMEOUT = 5;

type Status = "start" | "playing" | "over";

export type Target = "carrot" | "hole" | "rabbit";

interface GameStatusStore {
  score: number;
  status: Status;
  targets: Array<{ target: Target; timeout: number }>;
  start: () => void;
  checkOver: () => void;
  gameOver: () => void;
  hitTarget: (key: number) => void;
}

export const useGameStatusStore = create<GameStatusStore>((set, get) => ({
  score: 0,
  status: "start",
  targets: Array(9).fill({ target: "hole", timeout: 0 }),
  start: () => {
    set({
      score: 0,
      status: "playing",
      targets: Array(9).fill({ target: "carrot", timeout: TIMEOUT }),
    });

    const interval = setInterval(() => {
      set({
        targets: get().targets.map((target) => {
          switch (target.target) {
            case "carrot":
              return {
                ...target,
                timeout: target.timeout - 1,
              };
            case "hole":
              if (target.timeout === 0) {
                return {
                  target: Math.random() > 0.5 ? "carrot" : "rabbit",
                  timeout: TIMEOUT,
                };
              } else {
                return {
                  ...target,
                  timeout: target.timeout - 1,
                };
              }
            case "rabbit":
              return {
                ...target,
                timeout: target.timeout - 1,
              };
          }
        }),
      });

      get().checkOver();

      if (get().status === "over") {
        clearInterval(interval);
      }
    }, 1000);
  },
  checkOver: () => {
    get().targets.map((target, index) => {
      if (target.timeout === 0) {
        if (target.target === "carrot") {
          get().gameOver();
        } else if (target.target === "rabbit") {
          const newTargets = get().targets;
          newTargets[index] = { ...target, target: "hole" };
          set({ targets: newTargets });
        }
      }
    });
  },
  gameOver: () => {
    set({
      status: "over",
      targets: Array(9).fill({ target: "hole", timeout: 0 }),
    });
  },
  hitTarget: (key) => {
    if (get().targets[key].target === "carrot") {
      set((state) => {
        const newTargets = [...state.targets];
        newTargets[key] = { target: "hole", timeout: 1 };
        return {
          score: state.score + 1,
          targets: newTargets,
        };
      });
    }
  },
}));
