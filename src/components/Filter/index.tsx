import { ReactNode } from 'react';
import * as S from './styles';

interface FilterProps {
  children: ReactNode;
}

function Filter({ children }: FilterProps) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

export default Filter;
