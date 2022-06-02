import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  width: 100vw;
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const DataContent = styled.div`
  width: 75vw;
  max-height: 550px;
  min-height: 510px;

  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0px 0px 50px -25px #000000;

  background: #adadad;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  grid-template-areas:
    "textarea inputs"
    "button button";

  h1 {
    width: 100%;
    margin-top: 1.5rem;

    color: #fff;
    font-size: 24px;
    text-align: center;
  }

  textarea {
    width: 100%;
    height: 440px;
    padding: 0.5rem;

    border-radius: 5px;
    border: 2px solid #fff;

    outline: transparent;
    resize: none;

    grid-area: textarea;

    transition: all 0.3s ease-in-out;

    &:focus {
      border: 2px solid #f09c79;
    }
  }

  label {
    font-size: 12px;
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  grid-area: button;
`;

export const InputsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 55px);
  grid-gap: 10px;
`;

