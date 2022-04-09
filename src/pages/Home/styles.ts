import styled from "styled-components";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

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
  justify-content: center;
  align-items: flex-start;
`;

export const TableContainer = styled.div`
  width: 60vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const STable = styled(Table)`
  border-spacing: 0;
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

  Tr {
    background-color: rgba(241, 156, 121, 0.3);
    &:hover {
      background-color: rgba(241, 156, 121, 0.6);
    }
  }
`;

export const STh = styled(Th)`
  text-align: left;
  padding: 0.6rem;
`;

export const STd = styled(Td)`
  padding: 5px;
`;
