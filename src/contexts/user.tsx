import React, { createContext, useState } from "react";
import { UserData } from "../types/UserData";

interface UserContextContent {
  user: UserData | void;
  setUser: (data: UserData) => void;
}

const UserContext = createContext<UserContextContent>({} as UserContextContent);

export function UserProvider({ children }: any) {
  const [user, setUser] = useState<UserData | void>();

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
