import * as S from "./styles";

interface StyledInputProps {
  handleOnChange: (e: any) => void;
  labelHtmlFor: string;
  label: string;
  placeholder?: string;
  value?:string;
  type?: string | 'text'
}

function StyledInput({
  handleOnChange,
  labelHtmlFor,
  label,
  placeholder,
  value,
  type,
}: StyledInputProps) {
  return (
    <S.InputContainer>
      <label htmlFor={labelHtmlFor}>{label}</label>
      <input type={type} placeholder={placeholder} onChange={(e) => handleOnChange(e)} value={value}/>
    </S.InputContainer>
  );
}

export default StyledInput;
