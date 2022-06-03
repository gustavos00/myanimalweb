import { useContext, useState } from 'react';
import { generateUrlSearchParams } from '../../utils/URLSearchParams';

import * as S from './styles';

import api from '../../api/api';
import UserContext from '../../contexts/user';
import StatesContext from '../../contexts/states';
import StyledButton from '../StyledButton';
import StyledInput from '../StyledInput';

interface CreateAddressProps {
  setHaveAddress: (e: boolean) => void;
}

function CreateAddress({ setHaveAddress }: CreateAddressProps) {
  const [doorNumber, setDoorNumber] = useState<string>();
  const [streetName, setStreetName] = useState<string>();
  const [postalCode, setPostalCode] = useState<string>();
  const [parish, setParish] = useState<string>();
  const [locality, setLocality] = useState<string>();

  const { user } = useContext(UserContext);
  const { setIsLoading } = useContext(StatesContext);

  const handleCreateAddress = async () => {
    setIsLoading(true);
    try {
      const data = generateUrlSearchParams({
        parishName: parish,
        locationName: locality,
        streetName,
        doorNumber,
        postalCode,
        email: user?.email ?? '',
        isVeterinarian: user?.isVeterinarian,
      });
      await api.post('/user/createAddress', data);
      setHaveAddress(true);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  return (
    <S.Container>
      <StyledInput
        label={'Door'}
        labelHtmlFor={'Door'}
        placeholder={'Door'}
        handleOnChange={(e) => setDoorNumber(e.target.value)}
      />
      <StyledInput
        label={'Street name'}
        labelHtmlFor={'Street name'}
        placeholder={'Street name'}
        handleOnChange={(e) => setStreetName(e.target.value)}
      />
      <StyledInput
        label={'Postal Code'}
        labelHtmlFor={'Postal Code'}
        placeholder={'Postal Code'}
        handleOnChange={(e) => setPostalCode(e.target.value)}
      />
      <StyledInput
        label={'City'}
        labelHtmlFor={'City'}
        placeholder={'City'}
        handleOnChange={(e) => setParish(e.target.value)}
      />
      <StyledInput
        label={'Locality'}
        labelHtmlFor={'Locality'}
        placeholder={'Locality'}
        handleOnChange={(e) => setLocality(e.target.value)}
      />

      <StyledButton text={'Submit'} handleClick={handleCreateAddress} />
    </S.Container>
  );
}

export default CreateAddress;
