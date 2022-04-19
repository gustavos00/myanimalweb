import * as S from "./styles";

interface StyledSelectProps {
  array: Array<any>;
  propertyName: string;
  labelHtmlFor: string;
  label: string;
  selectedProperty?: string;
}

function StyledSelect({
  array,
  propertyName,
  labelHtmlFor,
  label,
  selectedProperty,
}: StyledSelectProps) {
  return (
    <S.InputContainer>
      <label htmlFor={labelHtmlFor}>{label}</label>
      <select id={labelHtmlFor}>
        {array?.map((element) => (
          <option
            selected={selectedProperty === element[propertyName] ? true : false}
          >
            {element[propertyName]}
          </option>
        ))}
      </select>
    </S.InputContainer>
  );
}

export default StyledSelect;
