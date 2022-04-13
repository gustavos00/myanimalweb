import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { EventsData } from "../../types/EventsData";
import { generateUrlSearchParams } from "../../utils/URLSearchParams";

import Loading from "../../components/Loading";
import Sidebar from "../../components/Sidebar";
import StatesContext from "../../contexts/states";
import api from "../../api/api";
import UserContext from "../../contexts/user";
import StyledSelect from "../../components/StyledSelect";
import StyledButton from "../../components/StyledButton";

import * as S from "./styles";
import UploadFiles from "../../components/UploadFiles";

function UpdateReport() {
  const state = useLocation().state as EventsData;
  const navigate = useNavigate();

  const { isLoading } = useContext(StatesContext);

  const { animals, events, setEvents, eventsStatus, eventsTypes } =
    useContext(UserContext);

  const [report, setReport] = useState<string>(state.report);

  const handleUpdate = async () => {
    try {
      const reportNewData = {
        idEvents: state.idEvents,
        report,
        eventsStatus,
        eventsTypes,
      };
      const data = generateUrlSearchParams(reportNewData);
      api.post("/veterinarian/updateEvent", data);

      const tempEvents = events;
      const eventIndexArray = tempEvents.findIndex(
        (element) => element.idEvents === state.idEvents
      );
      tempEvents[eventIndexArray] = { ...state, report }; //to do -> missing types and status;
      setEvents(tempEvents);

      navigate("/");
    } catch (e) {
      alert("Error 5");
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
                selectedProperty={state.eventsType.value}
                label={"Events Types"}
                labelHtmlFor={"eventsTypes"}
                array={eventsTypes ?? []}
                propertyName={"value"}
              />
              <StyledSelect
                selectedProperty={state.eventsStatus.value}
                label={"Events Status"}
                labelHtmlFor={"eventsStatus"}
                array={eventsStatus ?? []}
                propertyName={"value"}
              />
              <StyledSelect
                selectedProperty={state.animal.name}
                label={"Selected Animal"}
                labelHtmlFor={"selectedAnimal"}
                array={animals ?? []}
                propertyName={"name"}
              />
              <UploadFiles />
            </S.InputsContainer>

            <S.ButtonContainer>
              <StyledButton handleClick={handleUpdate} text={"Submit"} />
            </S.ButtonContainer>
          </S.DataContent>
        </S.Content>
      </S.Container>

      {isLoading && <Loading />}
    </>
  );
}

export default UpdateReport;
