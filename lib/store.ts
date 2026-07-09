import { create } from "zustand";

interface UIState {
  mobileMenuOpen: boolean;
  activeProjectSlug: string | null;
  setMobileMenuOpen: (open: boolean) => void;
  toggleMobileMenu: () => void;
  setActiveProjectSlug: (slug: string | null) => void;
  openProject: (slug: string) => void;
  closeProject: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  activeProjectSlug: null,
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  setActiveProjectSlug: (slug) => set({ activeProjectSlug: slug }),
  openProject: (slug) => set({ activeProjectSlug: slug, mobileMenuOpen: false }),
  closeProject: () => set({ activeProjectSlug: null }),
}));
