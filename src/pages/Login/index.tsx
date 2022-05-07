import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { generateFormData } from '../../utils/FormData';

import * as S from './styles';

import GoogleLogin from 'react-google-login';
import UserContext from '../../contexts/user';
import api from '../../api/api';
import Loading from '../../components/Loading';
import EventsContext from '../../contexts/events';

const uuid = require('uuid');

const Login = () => {
  let userId: number;
  const [isLoading, setIsLoading] = useState<boolean>();

  const { setUser, setAnimals, setUnacceptedOwners } = useContext(UserContext);
  const { setEventsStatus, setEventsTypes, setEvents } = useContext(EventsContext);

  const navigate = useNavigate();

  const handleGooleLogin = async (googleResponse: any) => {
    if (!googleResponse.profileObj) return console.log('missing data');
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
      data.append('userPhoto', imageBlob);
      const createUserResponse = await api.post('/user/create', data);
      userId = createUserResponse.data.idUser;
      setUser({
        ...createUserResponse.data,
        haveAddress: !(createUserResponse.data.address === undefined || createUserResponse.data.address.idUser === null),
      });
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }

    try {
      const getEventsPropsResponse = await api.get(`veterinarian/getEventsProps`);
      setEventsStatus(getEventsPropsResponse.data.eventsStatus);
      setEventsTypes(getEventsPropsResponse.data.eventsTypes);
    } catch (e) {
      console.log(e);
      alert('2.2');
    }

    try {
      const getAnimalsResponse = await api.get(`veterinarian/getAnimals?id=${userId}`);
      setAnimals(getAnimalsResponse.data);
      console.log(getAnimalsResponse.data);
    } catch (e) {
      console.log(e);
      alert('2.3');
    }

    try {
      const getEventsResponse = await api.get(`veterinarian/getEvents?id=${userId}`);
      setEvents(getEventsResponse.data);
    } catch (e) {
      console.log(e);
      alert('2.4');
    }

    try {
      const getNotAcceptedOwners = await api.get(`veterinarian/getNotAcceptedOwners?id=${userId}`);
      setUnacceptedOwners(getNotAcceptedOwners.data);
    } catch (e) {
      console.log(e);
      alert('2.5');
    }

    setIsLoading(false);
    navigate('/');
  };

  return (
    <>
      <S.Container>
        <S.Image />
        <S.TextContainer>
          <h1>Welcome to myAnimal</h1>

          <S.AccessContainer>
            <p>
              You can access your veterinarian platform <GoogleLogin render={(renderProps) => <button onClick={renderProps.onClick}>here</button>} buttonText="Login" clientId="684156509987-sjf96dubfbonavha6gcbavl9bos8j4b6.apps.googleusercontent.com" onSuccess={handleGooleLogin} onFailure={handleGooleLogin} cookiePolicy={'single_host_origin'} />!
            </p>
          </S.AccessContainer>
        </S.TextContainer>
      </S.Container>

      {isLoading && <Loading />}
    </>
  );
};

export default Login;
