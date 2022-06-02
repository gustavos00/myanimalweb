import { useContext, useState } from "react";
import { generateUrlSearchParams } from "../../utils/URLSearchParams";

import * as S from "./styles";

import api from "../../api/api";
import UserContext from "../../contexts/user";
import StatesContext from "../../contexts/states";
import StyledButton from "../StyledButton";

interface CreateAddressProps {
  setHaveAddress: (e: boolean) => void
}

function CreateAddress({setHaveAddress} : CreateAddressProps) {
  const [doorNumber, setDoorNumber] = useState<string>();
  const [streetName, setStreetName] = useState<string>();
  const [postalCode, setPostalCode] = useState<string>();
  const [parish, setParish] = useState<string>();
  const [locality, setLocality] = useState<string>();

  const { user } = useContext(UserContext);
  const { setIsLoading } = useContext(StatesContext);

  const handleCreateAddress = async () => {
    setIsLoading(true);
    try {
      const data = generateUrlSearchParams({
        parishName: parish,
        locationName: locality,
        streetName,
        doorNumber,
        postalCode,
        email: user?.email ?? "",
        isVeterinarian: user?.isVeterinarian,
      });
      await api.post("/user/createAddress", data);
      setHaveAddress(true)
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <input
        required
        placeholder={"Door"}
        onChange={(e) => setDoorNumber(e.target.value)}
      />
      <input
        required
        placeholder={"Street name"}
        onChange={(e) => setStreetName(e.target.value)}
      />
      <input
        required
        placeholder={"Postal Code"}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <input
        required
        placeholder={"City"}
        onChange={(e) => setParish(e.target.value)}
      />
      <input
        required
        placeholder={"Locality"}
        onChange={(e) => setLocality(e.target.value)}
      />

      <StyledButton text={'Submit'} handleClick={handleCreateAddress}/>
    </S.Container>
  );
}

export default CreateAddress;
