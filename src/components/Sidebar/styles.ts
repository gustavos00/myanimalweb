import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div<{ sidebarisopen: boolean }>`
  width: ${(props) => (props.sidebarisopen ? "20vw" : "5vh")};
  max-width: ${(props) => (props.sidebarisopen ? "270px" : "80px")};
  min-width: ${(props) => (props.sidebarisopen ? "255px" : "75px")};

  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
  bottom: 0;
  background-color: #adadad;

  z-index: 10;
`;

export const SidebarElements = styled.div`
  width: 100%;
  height: 100%;
`;

export const SettingsSidebarContainer = styled.button<{
  sidebarisopen: boolean;
}>`
  height: 100px;

  background: none;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  background: #4f4f4f;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  p {
    color: #fff;
    font-size: 18px;

    display: ${(props) => (props.sidebarisopen ? "block" : "none")};
  }
`;

export const SLogout = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
