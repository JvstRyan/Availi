import { create } from 'zustand'

type User = 
{
    userRole: string
    userName: string
    userEmail: string
}

type UserState =
{
    user: User | null;
    setUser: (user: User) => void
}

const useUserStore = create<UserState>()((set) => 
({
user: null,
setUser: (user) => set({user})
}))

export default useUserStore;