import { create } from "zustand";
import { persist } from "zustand/middleware";

type Page = "chat" | "game";

interface SelectPageStore {
  page: Page;
  toggle: () => void;
}

export const useSelectPageStore = create<SelectPageStore>()(
  persist(
    (set) => ({
      page: "chat",
      toggle: () =>
        set((state) => ({
          page: state.page === "chat" ? "game" : "chat",
        })),
    }),
    { name: "selectPageStore" },
  ),
);
