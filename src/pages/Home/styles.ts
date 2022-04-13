import styled from "styled-components";
import { Tr, Td } from "react-super-responsive-table";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding-bottom: 100px;
  
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

export const STd = styled(Td)`
  padding: 5px;

  font-size: 14px;
  font-weight: normal;
`;

export const STr = styled(Tr)<{ iscolored: boolean }>`
  padding: 5px;

  font-size: 14px;
  font-weight: normal;

  background: ${(props) => (props.iscolored ? "rgba(255,255,255,.3)" : "rgba(255,255,255,.1)")};
`;
