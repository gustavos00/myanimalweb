import styled from "styled-components";

export const Container = styled.div`
  padding: 6.2vw;

  display: flex;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #2b303a;
    font-size: 120px;
    text-transform: uppercase;
  }
`;

export const AccessContainer = styled.div`
  width: 612px;
  padding: 10px;

  display: flex;
  align-items: center;

  border-left: 5px solid #f09c79;

  p {
    font-size: 36px;
    color: #999797;
  }

  button {
    text-decoration: none;
    color: #f09c79;
    font-size: 36px;

    background: none;
    border: none;

    transition: all ease-in-out 2s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ModalContainer = styled.div`
  width: 400px;
  height: 400px;

  background-color: #fff;
  border-radius: 15px;
`;
