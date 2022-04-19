import * as S from "./styles";

interface StyledSelectProps {
  handleOnChange: (e: any) => void;
  array: Array<any>;
  propertyName: string;
  labelHtmlFor: string;
  label: string;
  selectedProperty?: string;
}

function StyledSelect({
  handleOnChange,
  array,
  propertyName,
  labelHtmlFor,
  label,
  selectedProperty,
}: StyledSelectProps) {
  return (
    <S.InputContainer>
      <label htmlFor={labelHtmlFor}>{label}</label>
      <select
        id={labelHtmlFor}
        onChange={(e) =>
          handleOnChange(
            array.filter((object) => object[propertyName] === e.target.value)[0]
          )
        }
      >
        {array?.map((element, index) => {
          return (
            <option key={index} defaultValue={element[propertyName]}>
              {element[propertyName]}
            </option>
          );
        })}
      </select>
    </S.InputContainer>
  );
}

export default StyledSelect;
