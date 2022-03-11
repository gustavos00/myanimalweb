import { UserAddressData } from "./UserAddressData";
import { UserData } from "./UserData";

export interface VeterinarianData extends UserData {
  location: string,
  veterinarianAddress: UserAddressData;
}
