import { UserData } from "./UserData";
import { VeterinarianData } from "./VeterinarianData";

export interface AnimalData {
  age: string;
  birthday: string;
  birthdayMonth: string;
  breed: string;
  idAnimal: number;
  photoName: string;
  photoUrl: string;
  name: string;
  trackNumber: string;
  userIdUser: number;
  user: UserData;
  veterinarianChatFingerprint: string;
  userVeterinarian: number | null;
  userVeterinarianFk: VeterinarianData | null;
}

export interface AnimalDataWithArraykey extends AnimalData {
  arrayKey: number;
}
