import Sidebar from "../../components/Sidebar";
import Filter from "../../components/Filter";
import Loading from "../../components/Loading";
import CreateAddress from "../../components/CreateAddress";
import StatesContext from "../../contexts/states";
import UserContext from "../../contexts/user";
import Table from "../../components/Table";
import EventsContext from "../../contexts/events";
import StyledButton from "../../components/StyledButton";
import api from "../../api/api";

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

import * as S from "./styles";

import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { formatDate } from "../../utils/date";
import { generateUrlSearchParams } from "../../utils/URLSearchParams";

function Home() {
  const navigate = useNavigate();

  const { isLoading, setIsLoading } = useContext(StatesContext);
  const { user, unacceptedOwners, setUnacceptedOwners, animals } =
    useContext(UserContext);
  const { events } = useContext(EventsContext);

  const [haveAddress, setHaveAddress] = useState<boolean>(
    user?.haveAddress ? user.haveAddress : false
  );

  const handleAcceptRequest = async (idAnimal: string | number) => {
    try {
      setIsLoading(true);
      const data = generateUrlSearchParams({ id: idAnimal });
      await api.post("/veterinarian/updateVeterinarianStatus", data);

      const tempArray = unacceptedOwners;
      const alreadyAcceptedElementIndex = tempArray.findIndex(
        (element) => element.idAnimal === idAnimal
      );
      tempArray.splice(alreadyAcceptedElementIndex, 1);
      setUnacceptedOwners([...tempArray]);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const registeredAnimalsTableHeaders = [
    "Name",
    "Age",
    "Breed",
    "Track Number",
    "Birthday",
    "Birthday Month",
    "Owner Name",
    "Owner Contact",
  ];
  const regiteredEventsHeaders = [
    "Report",
    "Status",
    "Type",
    "Animal Name",
    "Date",
  ];
  const unacceptedOwnersHeaders = [
    "Name",
    "Email",
    "Contact",
    "Animal Name",
    "Animal Age",
    "Animal Breed",
    "Actions",
  ];

  return (
    <>
      <S.Container>
        <Sidebar />
        <S.Content>
          <Table
            title={"Registered Animals"}
            header={registeredAnimalsTableHeaders}
          >
            <>
              {animals?.map((element, index) => (
                <S.STr iscolored={index % 2 === 0} key={index}>
                  <S.STd>{element.name}</S.STd>
                  <S.STd>{element.age}</S.STd>
                  <S.STd>{element.breed}</S.STd>
                  <S.STd>{element.trackNumber}</S.STd>
                  <S.STd>{element.birthday}</S.STd>
                  <S.STd>{element.birthday}</S.STd>
                  <S.STd>
                    {element.user.givenName} {element.user.familyName}
                  </S.STd>
                  <S.STd>{element.user.email}</S.STd>
                </S.STr>
              ))}
            </>
          </Table>

          <Table title={"Registered Events"} header={regiteredEventsHeaders}>
            <>
              {events?.map((element, index) => (
                <S.STr
                  onClick={() => navigate("/update", { state: element })}
                  iscolored={index % 2 === 0}
                  key={index}
                >
                  <S.STd>{element.report ?? ""}</S.STd>
                  <S.STd>{element.eventsStatus.value}</S.STd>
                  <S.STd>{element.eventsType.value}</S.STd>
                  <S.STd>{element.animal.name}</S.STd>
                  <S.STd>{formatDate(element.createdAt)}</S.STd>
                </S.STr>
              ))}
            </>
          </Table>

          <Table title={"Not Accepted Owners"} header={unacceptedOwnersHeaders}>
            <>
              {unacceptedOwners?.map((element, index) => (
                <S.STr iscolored={index % 2 === 0} key={index}>
                  <S.STd>
                    {element.user.givenName} {element.user.givenName}
                  </S.STd>
                  <S.STd>{element.user.email}</S.STd>
                  <S.STd>{element.user.phoneNumber}</S.STd>
                  <S.STd>{element.name}</S.STd>
                  <S.STd>{element.age}</S.STd>
                  <S.STd>{element.breed}</S.STd>
                  <S.STd>
                    <StyledButton
                      text={"Accept"}
                      handleClick={() => handleAcceptRequest(element.idAnimal)}
                    />
                  </S.STd>
                </S.STr>
              ))}
            </>
          </Table>
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
