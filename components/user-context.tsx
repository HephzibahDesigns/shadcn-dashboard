"use client";

import { createContext, useContext, useState } from "react";

export type User = {
  username: string;
  email: string;
  phoneNumber: string;
  location: string;
  role: "admin" | "user";
};

const defaultUser: User = {
  username: "Hephzibah Designs",
  email: "example@gmail.com",
  phoneNumber: "+2348056456732",
  location: "Las Vegas, USA",
  role: "admin",
};

type UserContextType = {
  user: User;
  updateUser: (data: User) => void;
};

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(defaultUser);

  return (
    <UserContext.Provider
      value={{
        user,
        updateUser: setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return context;
}
