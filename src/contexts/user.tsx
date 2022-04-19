import { createContext, useState } from "react";
import { AnimalData } from "../types/AnimalData";
import { UserData } from "../types/UserData";

interface UserContextContent {
  user: UserData | void;
  setUser: (data: UserData) => void;
  unacceptedOwners: Array<AnimalData>;
  setUnacceptedOwners: (data: Array<AnimalData>) => void;

  animals: Array<AnimalData>;
  setAnimals: (data: Array<AnimalData>) => void;
}

const UserContext = createContext<UserContextContent>({} as UserContextContent);
export function UserProvider({ children }: any) {
  const [user, setUser] = useState<UserData>();
  const [unacceptedOwners, setUnacceptedOwners] = useState<Array<AnimalData>>([]);
  const [animals, setAnimals] = useState<Array<AnimalData>>([]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        unacceptedOwners,
        setUnacceptedOwners,
        animals,
        setAnimals,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
