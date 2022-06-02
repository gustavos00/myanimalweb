import { createContext, useState } from 'react';
import { EventsData, EventsStatus, EventsTypes } from '../types/EventsData';

interface EventsContextContent {
  events: Array<EventsData>;
  setEvents: (data: Array<EventsData>) => void;
  eventsTypes: Array<EventsTypes>;
  setEventsTypes: (data: Array<EventsTypes>) => void;
  eventsStatus: Array<EventsStatus>;
  setEventsStatus: (data: Array<EventsStatus>) => void;
}

const EventsContext = createContext<EventsContextContent>({} as EventsContextContent);

export function EventsProvider({ children }: any) {
  const [events, setEvents] = useState<Array<EventsData>>([]);
  const [eventsTypes, setEventsTypes] = useState<Array<EventsTypes>>([]);
  const [eventsStatus, setEventsStatus] = useState<Array<EventsStatus>>([]);

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
        eventsTypes,
        setEventsTypes,
        eventsStatus,
        setEventsStatus,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}

export default EventsContext;
