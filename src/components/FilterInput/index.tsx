import { faSearch } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

interface FilterInputProps {
  inputPlaceholder: string;
}

function FilterInput({ inputPlaceholder }: FilterInputProps) {
  return (
    <S.Container>
      <S.Background>
        <S.Icon color={"rgba(255,255,255,.7)"} icon={faSearch} />
        <S.Input placeholder={inputPlaceholder} />
      </S.Background>
    </S.Container>
  );
}

export default FilterInput;
