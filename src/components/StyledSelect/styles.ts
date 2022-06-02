import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex !important;
  flex-direction: column;

  select {
    height: 50px;
    padding: 0.5rem;

    border-radius: 5px;
    border: 2px solid #fff;

    outline: transparent;

    &:focus {
      border: 2px solid #f09c79;
    }
  }
`;
