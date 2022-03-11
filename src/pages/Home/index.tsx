import { useContext, useEffect, useState } from "react";
import { ReactComponent as CircleImage } from "../../assets/images/homeDog.svg";

import * as S from "./styles";
import GoogleLogin from "react-google-login";
import api from "../../api/api";
import Filter from "../../components/Filter";
import UserContext from "../../contexts/user";

const uuid = require("uuid");

const Home = () => {
  const [loginModalIsOpen, setloginModalIsOpen] = useState<boolean>(false);
  const { setUser, user } = useContext(UserContext);

  const handleGooleLogin = async (googleResponse: any) => {
    if (!googleResponse.profileObj) return console.log("missing data");
    const salt = uuid.v4();

    const response = await fetch(googleResponse.imageurl);
    const imageBlob = await response.blob();

    const userData = new FormData();
    userData.append("salt", salt);
    userData.append("givenName", googleResponse.profileObj.givenName);
    userData.append("familyName", googleResponse.profileObj.familyName);
    userData.append("email", googleResponse.profileObj.email);
    userData.append("isVeterinarian", true as unknown as string | Blob);
    userData.append("userPhoto", imageBlob);

    try {
      const response = await api.post("/user/create", userData);
      setUser(response.data);
      setloginModalIsOpen(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <S.Container>
        <CircleImage />
        <S.TextContainer>
          <h1>Welcome to</h1>
          <h1>myAnimal</h1>

          <S.AccessContainer>
            <p>
              You can access your veterinarian platform{" "}
              <button onClick={() => setloginModalIsOpen(!loginModalIsOpen)}>
                here
              </button>
              !
            </p>
          </S.AccessContainer>
        </S.TextContainer>
      </S.Container>

      {!!loginModalIsOpen && (
        <Filter>
          <S.ModalContainer>
            <GoogleLogin
              clientId="684156509987-sjf96dubfbonavha6gcbavl9bos8j4b6.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={handleGooleLogin}
              onFailure={handleGooleLogin}
              cookiePolicy={"single_host_origin"}
            />
            ,
          </S.ModalContainer>
        </Filter>
      )}
    </>
  );
};

export default Home;
