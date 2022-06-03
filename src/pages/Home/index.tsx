import Sidebar from '../../components/Sidebar';
import Filter from '../../components/Filter';
import Loading from '../../components/Loading';
import CreateAddress from '../../components/CreateAddress';
import StatesContext from '../../contexts/states';
import UserContext from '../../contexts/user';
import Table from '../../components/Table';
import EventsContext from '../../contexts/events';
import StyledButton from '../../components/StyledButton';
import api from '../../api/api';

import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

import * as S from './styles';

import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { formatDate } from '../../utils/date';
import { generateUrlSearchParams } from '../../utils/URLSearchParams';

function Home() {
  const navigate = useNavigate();

  const { isLoading, setIsLoading } = useContext(StatesContext);
  const { user, unacceptedOwners, setUnacceptedOwners, animals, setAnimals } = useContext(UserContext);
  const { events, setEvents } = useContext(EventsContext);

  const [haveAddress, setHaveAddress] = useState<boolean>(
    user?.haveAddress ? user.haveAddress : false
  );

  const handleAcceptRequest = async (idAnimal: string | number) => {
    try {
      setIsLoading(true);
      const data = generateUrlSearchParams({ id: idAnimal });
      await api.post('/veterinarian/updateVeterinarianStatus', data);

      const tempArray = unacceptedOwners;
      const acceptedAnimalIndex = tempArray.findIndex((element) => element.idAnimal === idAnimal);
      
      const acceptedAnimalData = tempArray[acceptedAnimalIndex]
      const tempAnimalArrays = animals
      tempAnimalArrays.push(acceptedAnimalData)
      setAnimals(tempAnimalArrays)

      tempArray.splice(acceptedAnimalIndex, 1);
      setUnacceptedOwners([...tempArray]);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const handleDeleteEvent = async (idEvent: string | number) => {
    try {
      setIsLoading(true);
      const data = generateUrlSearchParams({ id: idEvent });
      await api.post('/veterinarian/deleteEvent', data);

      const tempArray = events;
      const deletedEventIndex = tempArray.findIndex((element) => element.idEvents === idEvent);
      tempArray.splice(deletedEventIndex, 1);
      setEvents([...tempArray]);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const handleRemoveRegisteredAnimal = async (id: string | number) => {
    try {
      setIsLoading(true);
      const data = generateUrlSearchParams({ animalId: id });
      await api.post('/veterinarian/remove', data);

      const tempArray = animals;
      const deletedEventIndex = tempArray.findIndex((element) => element.idAnimal === id);
      tempArray.splice(deletedEventIndex, 1);
      setAnimals([...tempArray]);

      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const registeredAnimalsTableHeaders = [
    'Name',
    'Age',
    'Breed',
    'Track Number',
    'Birthday',
    'Birthday Month',
    'Owner Name',
    'Owner Contact',
    'Actions',
  ];
  const regiteredEventsHeaders = ['Report', 'Status', 'Type', 'Animal Name', 'Date', 'Actions'];
  const unacceptedOwnersHeaders = [
    'Name',
    'Email',
    'Contact',
    'Animal Name',
    'Animal Age',
    'Animal Breed',
    'Actions',
  ];

  return (
    <>
      <S.Container>
        <Sidebar />
        <S.Content>
          <Table title={'Registered Animals'} header={registeredAnimalsTableHeaders}>
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
                  <S.STd>
                    <StyledButton
                      text={'Remove'}
                      handleClick={() => handleRemoveRegisteredAnimal(element.idAnimal)}
                    />
                  </S.STd>
                </S.STr>
              ))}
            </>
          </Table>

          <Table title={'Registered Events'} header={regiteredEventsHeaders}>
            <>
              {events?.map((element, index) => (
                <S.STr iscolored={index % 2 === 0} key={index}>
                  <S.STd>{element.report ?? ''}</S.STd>
                  <S.STd>{element.eventsStatus.value}</S.STd>
                  <S.STd>{element.eventsType.value}</S.STd>
                  <S.STd>{element.animal.name}</S.STd>
                  <S.STd>{formatDate(element.date)}</S.STd>
                  <S.STd>
                    <S.ActionsContainer>
                      <StyledButton
                        text={'Update'}
                        handleClick={() => navigate('/update', { state: element })}
                      />
                      <StyledButton
                        text={'Delete'}
                        handleClick={() => handleDeleteEvent(element.idEvents)}
                      />
                    </S.ActionsContainer>
                  </S.STd>
                </S.STr>
              ))}
            </>
          </Table>

          <Table title={'Not Accepted Owners'} header={unacceptedOwnersHeaders}>
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
                      text={'Accept'}
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
