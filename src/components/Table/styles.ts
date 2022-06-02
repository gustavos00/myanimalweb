import styled from "styled-components";
import { Table, Thead, Tbody, Th, Td } from "react-super-responsive-table";

export const DataContent = styled.div`
  width: 75vw;
  max-height: 550px;
  min-height: 510px;

  margin: 2rem;
  padding: 0.5rem;
  border-radius: 15px;
  box-shadow: 0px 0px 50px -25px #000000;

  background: #adadad;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    width: 100%;
    margin-top: 1.5rem;

    color: #fff;
    font-size: 24px;
    text-align: center;
  }
`;

export const TableContent = styled.div`
  width: 90%;
  max-height: 90%;
  margin-top: 1rem;

  border-radius: 5px;

  position: relative;
  overflow: auto;
`;

export const STable = styled(Table)`
  width: 100%;
  height: 80%;

  border-spacing: 0;
  border-radius: 5px;

  position: relative;
  overflow: auto;
`;

export const STHead = styled(Thead)`
  background: #d66d42;
  color: #fff;

  Th {
    &:first-child {
      border-top-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
    }
  }
`;

export const STBody = styled(Tbody)`
  cursor: pointer;

`;

export const STh = styled(Th)`
  padding: 0.6rem;

  text-align: left;
  font-weight: normal;
  font-size: 14px;
`;

export const STd = styled(Td)`
  width: 100px;
  padding: 5px;
`;
