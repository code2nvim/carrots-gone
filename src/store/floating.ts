import { create } from "zustand";

interface FloatingState {
  show: boolean;
  message: string;
  showMessage: (msg: string) => void;
  close: () => void;
}

export const useFloatingStore = create<FloatingState>((set) => ({
  show: false,
  message: "",
  showMessage: (msg: string) => {
    set({ show: true, message: msg });
  },
  close: () => {
    set({ show: false, message: "" });
  },
}));
