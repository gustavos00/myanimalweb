import { useState } from "react";
import { ReactComponent as CircleImage } from "../../assets/images/homeDog.svg";

import * as S from "./styles";

import GoogleLogin from "react-google-login";
import api from "../../api/api";
import Filter from "../../components/Filter";

const Home = () => {
  const [loginModalIsOpen, setloginModalIsOpen] = useState<boolean>(false);

  const handleGooleLogin = async (googleResponse: any) => {
    if (!googleResponse.profileObj) return console.log("missing data");

    const userData = new FormData();
    userData.append("salt", "123");
    userData.append("givenName", "123");
    userData.append("familyName", "123");
    userData.append("email", "123@gmail.com");
    userData.append("isVeterinarian", "false");
    userData.append("userPhoto", {
      uri: googleResponse.profileObj.imageUrl,
      name: "userPhoto",
      type: "image/png",
    } as unknown as string);

    try {
      const data = await fetch("http://localhost:3000/api/user/create", {
        method: "post",
        headers: { },
        body: userData,
      });
      console.log(data);
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

      {loginModalIsOpen && (
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
