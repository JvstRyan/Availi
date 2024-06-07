import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  userName: string;
  userEmail: string;
  userId: string;
};

type UserState = {
  user: User | null;
  setUser: (user: User) => void;
};

const localStorageWithPromise = {
  getItem: (name: string) =>
    Promise.resolve(JSON.parse(localStorage.getItem(name) || "null")),
  setItem: (name: string, value: any) =>
    Promise.resolve(localStorage.setItem(name, JSON.stringify(value))),
  removeItem: (name: string) => Promise.resolve(localStorage.removeItem(name)),
};

const useUserStore = create(
  persist<UserState>(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "userStore",
      storage: localStorageWithPromise,
    }
  )
);

export default useUserStore;
