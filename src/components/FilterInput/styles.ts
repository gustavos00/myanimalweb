import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 90%;
  margin: 1rem 0;
`;

export const Background = styled.div`
  width: 300px;
  height: 35px;

  background: #d66d42;
  border-radius: 5px;

  display: flex;
  align-items: center;

  font-size: 2.2rem;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
`;

export const Input = styled.input`
  width: 100%;

  color: #fff;

  border: none;
  outline: none;
  background: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(255,255,255,.7);
  }
  :-ms-input-placeholder {
     color: rgba(255,255,255,.7);
  }
`;
