import Sidebar from "../../components/Sidebar";
import Filter from "../../components/Filter";
import Loading from "../../components/Loading";
import CreateAddress from "../../components/CreateAddress";
import StatesContext from "../../contexts/states";
import api from "../../api/api";
import UserContext from "../../contexts/user";

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import * as S from "./styles";

import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Tr } from "react-super-responsive-table";
import { AnimalData } from "../../types/AnimalData";

interface IPageProps {
  haveAddress: boolean;
}

function Home() {
  const state = useLocation().state as IPageProps;

  const { isLoading } = useContext(StatesContext);
  const { user } = useContext(UserContext);

  const [haveAddress, setHaveAddress] = useState<boolean>(state.haveAddress);
  const [animals, setAnimals] = useState<Array<AnimalData>>([]);

  useEffect(() => {
    const handleVeterinarianAnimalsRequest = async () => {
      const response = await api.get(
        `veterinarian/getAnimals?id=${user?.idUser}`
      );
      setAnimals(response.data);
    };
    handleVeterinarianAnimalsRequest();
  }, []);
  return (
    <>
      <S.Container>
        <Sidebar />
        <S.Content>
          <S.TableContainer>
            <S.STable>
              <S.STHead>
                <Tr>
                  <S.STh>Name</S.STh>
                  <S.STh>Age</S.STh>
                  <S.STh>Breed</S.STh>
                  <S.STh>Track Number</S.STh>
                  <S.STh>Birthday</S.STh>
                  <S.STh>Birthday Month</S.STh>
                  <S.STh>Owner Name</S.STh>
                  <S.STh>Owner Contact</S.STh>
                </Tr>
              </S.STHead>
              <S.STBody>
                <>
                  {animals.map((element) => {
                    return (
                      <Tr key={element.idAnimal}>
                        <S.STd>{element.name}</S.STd>
                        <S.STd>{element.age}</S.STd>
                        <S.STd>{element.breed}</S.STd>
                        <S.STd>{element.trackNumber}</S.STd>
                        <S.STd>{element.birthday}</S.STd>
                        <S.STd>{element.birthday}</S.STd>
                        <S.STd>{element.user.givenName} {element.user.familyName}</S.STd>
                        <S.STd>{element.user.email}</S.STd>
                      </Tr>
                    );
                  })}
                </>
              </S.STBody>
            </S.STable>
          </S.TableContainer>
        </S.Content>
      </S.Container>

      {!haveAddress && (
        <Filter>
          <CreateAddress setHaveAddress={setHaveAddress} />
        </Filter>
      )}

      {isLoading && <Loading />}
    </>
  );
}

export default Home;
