import { AnimalData } from "./AnimalData";

export interface EventsData {
  idEvents: number;
  report: string;
  createdAt: string;
  updatedAt: string;
  animalIdAnimal: number;
  animal: AnimalData;
  eventsStatusIdEventsStatus: number;
  eventsStatus: EventsStatus;
  eventsTypeIdEventsTypes: number;
  eventsType: EventsTypes;
}

export interface EventsStatus {
  idEventsStatus: number;
  label: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}

export interface EventsTypes {
  idEventsTypes: number;
  label: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}
