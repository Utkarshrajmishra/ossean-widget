import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  email: string;
  id: string;
  image: string;
}

type UserState = User & {
  setUser: (user: User) => void;
};

const useUser = create<UserState>()(
  persist(
    (set) => ({
      name: "",
      email: "",
      id: "",
      image: "",
      setUser: (user: User) => set(user),
    }),
    {
      name: "user-storage",
    },
  ),
);

export default useUser