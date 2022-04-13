import { ReactNode } from 'react';
import * as S from './styles';

interface FilterProps {
  children: ReactNode;
  aligned?: boolean
}

function Filter({ children, aligned }: FilterProps) {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

export default Filter;
