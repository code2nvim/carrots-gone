import { create } from "zustand";

interface GameStatusStore {
  score: number;
  addScore: () => void;
}

export const useGameStatusStore = create<GameStatusStore>((set) => ({
  score: 0,
  addScore: () =>
    set((state) => ({
      score: state.score + 1,
    })),
}));
