import { create } from "zustand";
import { persist } from "zustand/middleware";

type Page = "chat" | "game";

interface SelectPageStore {
  page: Page;
  setPage: (page: Page) => void;
}

export const useSelectPageStore = create<SelectPageStore>()(
  persist(
    (set) => ({
      page: "chat",
      setPage: (page) => {
        set({ page });
      },
    }),
    { name: "selectPageStore" },
  ),
);
