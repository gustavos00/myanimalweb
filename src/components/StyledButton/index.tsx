import * as S from "./styles";

interface StyledButtonProps {
  handleClick: () => void;
  text: string;
}

function StyledButton({ handleClick, text }: StyledButtonProps) {
  return (
    <S.Container>
      <button onClick={handleClick}>{text}</button>
    </S.Container>
  );
}

export default StyledButton;
