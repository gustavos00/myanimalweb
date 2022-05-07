import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { EventsData, EventsStatus, EventsTypes } from "../../types/EventsData";
import { generateUrlSearchParams } from "../../utils/URLSearchParams";
import { AnimalData } from "../../types/AnimalData";

import Loading from "../../components/Loading";
import Sidebar from "../../components/Sidebar";
import StatesContext from "../../contexts/states";
import api from "../../api/api";
import UserContext from "../../contexts/user";
import StyledSelect from "../../components/StyledSelect";
import StyledButton from "../../components/StyledButton";
import UploadFiles from "../../components/UploadFiles";
import EventsContext from "../../contexts/events";

import * as S from "./styles";

function CreateReport() {
  const navigate = useNavigate();

  const { isLoading, setIsLoading } = useContext(StatesContext);

  const { animals } = useContext(UserContext);
  const { events, setEvents, eventsStatus, eventsTypes } =
    useContext(EventsContext);

  const [report, setReport] = useState<string>();
  const [eventType, setEventType] = useState<EventsTypes>(eventsTypes[0]);
  const [eventStatus, setEventStatus] = useState<EventsStatus>(eventsStatus[0]);
  const [animal, setAnimal] = useState<AnimalData>(animals[0]);

  const handleCreate = async () => {
    try {
      setIsLoading(true)
      const data = generateUrlSearchParams({
        report: report ?? '',
        eventsStatusId: eventStatus?.idEventsStatus,
        eventsTypesId: eventType?.idEventsTypes,
        animalId: animal?.idAnimal,
      });
      const response = await api.post("/veterinarian/createEvent", data)
      
      const tempEvents = events;
      tempEvents.push({
        ...response.data,
        eventsStatus: eventStatus,
        eventsType: eventsTypes,
        animal
      } as unknown as EventsData);
      
      setEvents(tempEvents);
      setIsLoading(false)
      navigate("/");
    } catch (e) {
      setIsLoading(false)
      alert("Error 6");
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
                cols={30}
                rows={10}
                onChange={(e) => setReport(e.target.value)}
              />
            </div>
            {/* Missing date */}
            <S.InputsContainer>
              <StyledSelect
                handleOnChange={setEventType}
                label={"Events Types"}
                labelHtmlFor={"eventsTypes"}
                array={eventsTypes ?? []}
                propertyName={"value"}
              />
              <StyledSelect
                handleOnChange={setEventStatus}
                label={"Events Status"}
                labelHtmlFor={"eventsStatus"}
                array={eventsStatus ?? []}
                propertyName={"value"}
              />
              <StyledSelect
                handleOnChange={setAnimal}
                label={"Selected Animal"}
                labelHtmlFor={"selectedAnimal"}
                array={animals ?? []}
                propertyName={"name"}
              />
              <UploadFiles />
            </S.InputsContainer>

            <S.ButtonContainer>
              <StyledButton handleClick={handleCreate} text={"Submit"} />
            </S.ButtonContainer>
          </S.DataContent>
        </S.Content>
      </S.Container>

      {isLoading && <Loading />}
    </>
  );
}

export default CreateReport;
