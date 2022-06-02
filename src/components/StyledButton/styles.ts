import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 50%;
    height: 40px;

    background: none;
    border-radius: 5px;
    border: 2px solid #f09c79;

    color: #f09c79;

    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #fff;

      border: none;
      background: #f09c79;
    }
  }
`;
