import { create } from "zustand";
import type { UIState } from "@/types/uiState";

export const useUiStore = create<UIState>((set) => ({
  isMobileNavOpen: false,
  toggleMobileNav: () =>
    set((state) => ({
      isMobileNavOpen: !state.isMobileNavOpen,
    })),
}));
