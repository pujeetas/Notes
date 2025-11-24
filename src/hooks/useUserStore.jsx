import { create } from "zustand";

const useUserStore = create((set) => ({
  newUser: null,

  addUser: (userData) => set(() => ({ newUser: userData })),

  removeUser: () => set({ newUser: null }),
}));

export default useUserStore;
