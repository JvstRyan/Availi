import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = 
{
    userRole: string
    userName: string
    userEmail: string
    userId: string
}

type UserState =
{
    user: User | null;
    setUser: (user: User) => void
}

const useUserStore = create(persist<UserState>((set) => 
({
user: null,
setUser: (user) => set({user})
}), {
    name: 'userStore',
    getStorage: () => localStorage
}));

export default useUserStore;