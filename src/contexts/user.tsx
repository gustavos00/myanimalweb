import { createContext, useState } from "react";
import { AnimalData } from "../types/AnimalData";
import { EventsData, EventsStatus, EventsTypes } from "../types/EventsData";
import { UserData } from "../types/UserData";

interface UserContextContent {
  user: UserData | void;
  setUser: (data: UserData) => void;

  events: Array<EventsData>;
  setEvents: (data: Array<EventsData>) => void;
  eventsTypes: Array<EventsTypes>;
  setEventsTypes: (data: Array<EventsTypes>) => void;
  eventsStatus: Array<EventsStatus>;
  setEventsStatus: (data: Array<EventsStatus>) => void;

  animals: Array<AnimalData> | void;
  setAnimals: (data: Array<AnimalData>) => void;
}

const UserContext = createContext<UserContextContent>({} as UserContextContent);

export function UserProvider({ children }: any) {
  const [user, setUser] = useState<UserData>();
  const [events, setEvents] = useState<Array<EventsData>>([]);
  const [eventsTypes, setEventsTypes] = useState<Array<EventsTypes>>([]);
  const [eventsStatus, setEventsStatus] = useState<Array<EventsStatus>>([]);
  const [animals, setAnimals] = useState<Array<AnimalData>>();

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        events,
        setEvents,
        eventsTypes,
        setEventsTypes,
        eventsStatus,
        setEventsStatus,
        animals,
        setAnimals,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
