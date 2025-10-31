import { create } from "zustand";

const useUserStore = create((set) => ({
  newUser: null,

  addUser: (userData) => set(() => ({ newUser: userData })),

  remvoveUser: () => set({ newUser: null }),
}));

export default useUserStore;
