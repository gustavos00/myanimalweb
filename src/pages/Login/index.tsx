import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import * as S from "./styles";
import GoogleLogin from "react-google-login";
import UserContext from "../../contexts/user";
import api from "../../api/api";
import Loading from "../../components/Loading";
import { generateFormData } from "../../utils/FormData";

const uuid = require("uuid");

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const { setUser, setEvents, setAnimals, setEventsStatus, setEventsTypes } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleGooleLogin = async (googleResponse: any) => {
    if (!googleResponse.profileObj) return console.log("missing data");
    setIsLoading(true);

    const salt = uuid.v4();

    const response = await fetch(googleResponse.imageurl);
    const imageBlob = await response.blob();

    try {
      const data = generateFormData({
        salt,
        givenName: googleResponse.profileObj.givenName,
        familyName: googleResponse.profileObj.familyName,
        email: googleResponse.profileObj.email,
        isVeterinarian: true,
      });
      data.append("userPhoto", imageBlob);
      const createUserResponse = await api.post("/user/create", data);

      setUser({
        ...createUserResponse.data,
        haveAddress: createUserResponse.data.address.idAddress !== null,
      });

      const getEventsPropsResponse = await api.get(
        `veterinarian/getEventsProps`
      );
      setEventsStatus(getEventsPropsResponse.data.eventsStatus);
      setEventsTypes(getEventsPropsResponse.data.eventsTypes);

      const getAnimalsResponse = await api.get(
        `veterinarian/getAnimals?id=${createUserResponse.data.idUser}`
      );

      setAnimals(getAnimalsResponse.data);

      const getEventsResponse = await api.get(
        `veterinarian/getEvents?id=${createUserResponse.data.idUser}`
      );

      setIsLoading(false);
      setEvents(getEventsResponse.data);
      navigate("/");
    } catch (e) {
      setIsLoading(false);
      alert("2");
    }
  };

  return (
    <>
      <S.Container>
        <S.Image />
        <S.TextContainer>
          <h1>Welcome to myAnimal</h1>

          <S.AccessContainer>
            <p>
              You can access your veterinarian platform{" "}
              <GoogleLogin
                render={(renderProps) => (
                  <button onClick={renderProps.onClick}>here</button>
                )}
                buttonText="Login"
                clientId="684156509987-sjf96dubfbonavha6gcbavl9bos8j4b6.apps.googleusercontent.com"
                onSuccess={handleGooleLogin}
                onFailure={handleGooleLogin}
                cookiePolicy={"single_host_origin"}
              />
              !
            </p>
          </S.AccessContainer>
        </S.TextContainer>
      </S.Container>

      {isLoading && <Loading />}
    </>
  );
};

export default Login;
