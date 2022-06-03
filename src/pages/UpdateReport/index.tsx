import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { EventsData, EventsStatus, EventsTypes } from '../../types/EventsData';
import { generateUrlSearchParams } from '../../utils/URLSearchParams';

import Loading from '../../components/Loading';
import Sidebar from '../../components/Sidebar';
import StatesContext from '../../contexts/states';
import api from '../../api/api';
import UserContext from '../../contexts/user';
import StyledSelect from '../../components/StyledSelect';
import StyledButton from '../../components/StyledButton';
import UploadFiles from '../../components/UploadFiles';
import EventsContext from '../../contexts/events';

import * as S from './styles';
import { AnimalData } from '../../types/AnimalData';
import StyledInput from '../../components/StyledInput';

function UpdateReport() {
  const state = useLocation().state as EventsData;
  const navigate = useNavigate()

  const { isLoading } = useContext(StatesContext);

  const { animals } = useContext(UserContext);
  const { eventsStatus, eventsTypes, events, setEvents } = useContext(EventsContext);

  const convertedDate = new Date(state.date);
  const formattedDate = convertedDate.toISOString().substr(0, convertedDate.toISOString().indexOf('.'));

  const [report, setReport] = useState<string>(!!state.report ? state.report : '');
  const [date, setDate] = useState<string>(formattedDate);
  const [eventType, setEventType] = useState<EventsTypes>(state.eventsType);
  const [eventStatus, setEventStatus] = useState<EventsStatus>(state.eventsStatus);
  const [animal, setAnimal] = useState<AnimalData>(state.animal);

  const handleUpdate = async () => {
    try {
      const reportNewData = {
        idEvents: state.idEvents,
        report,
        date,
        eventsStatusId: eventStatus.idEventsStatus,
        eventsTypesId: eventType.idEventsTypes,
        animalId: animal.idAnimal,
      };
      const data = generateUrlSearchParams(reportNewData);
      api.post('/veterinarian/updateEvent', data);

      const tempEvents = events;
      const eventIndexArray = tempEvents.findIndex(
        (element) => element.idEvents === state.idEvents
      );
      tempEvents[eventIndexArray] = { ...state, report }; //to do -> missing types and status;
      setEvents(tempEvents);

      navigate('/');
    } catch (e) {
      alert('Error 5');
    }
  };

  return (
    <>
      <S.Container>
        <Sidebar />
        <S.Content>
          {/* to do -> Missing a title */}
          <S.DataContent>
            <div>
              <label htmlFor="reportText">Report</label>
              <textarea
                id="reportText"
                value={report}
                cols={30}
                rows={10}
                onChange={(e) => setReport(e.target.value)}
              />
            </div>
            <S.InputsContainer>
              <StyledSelect
                handleOnChange={setEventType}
                selectedProperty={eventType.value}
                label={'Events Types'}
                labelHtmlFor={'eventsTypes'}
                array={eventsTypes ?? []}
                propertyName={'value'}
              />
              <StyledSelect
                handleOnChange={setEventStatus}
                selectedProperty={eventStatus.value}
                label={'Events Status'}
                labelHtmlFor={'eventsStatus'}
                array={eventsStatus ?? []}
                propertyName={'value'}
              />
              <StyledSelect
                handleOnChange={setAnimal}
                selectedProperty={animal.name}
                label={'Selected Animal'}
                labelHtmlFor={'selectedAnimal'}
                array={animals ?? []}
                propertyName={'name'}
              />
              <StyledInput
                handleOnChange={(e) => setDate(e.target.value)}
                type={'datetime-local'}
                label={'Select a date'}
                value={date}
                labelHtmlFor={'Select a date'}
              />
              <UploadFiles />
            </S.InputsContainer>

            <S.ButtonContainer>
              <StyledButton handleClick={handleUpdate} text={'Submit'} />
            </S.ButtonContainer>
          </S.DataContent>
        </S.Content>
      </S.Container>

      {isLoading && <Loading />}
    </>
  );
}

export default UpdateReport;
