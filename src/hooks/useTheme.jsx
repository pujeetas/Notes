import { create } from "zustand";

const useTheme = create((set) => ({
  isDark: document.body.dataset.theme === "dark",
  toggleDark: () =>
    set((state) => {
      document.body.dataset.theme = state.isDark ? "light" : "dark";
      return { isDark: !state.isDark };
    }),
}));

export default useTheme;
