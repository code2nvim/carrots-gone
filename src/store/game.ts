import { create } from "zustand";

interface GameStore {
  score: number;
  addScore: () => void;
}

export const useGameStore = create<GameStore>((set) => ({
  score: 0,
  addScore: () =>
    set((state) => ({
      score: state.score + 1,
    })),
}));
