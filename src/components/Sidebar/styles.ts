import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div<{ sidebarIsOpen: boolean }>`
  height: 100vh;
  width: ${(props) => (props.sidebarIsOpen ? "20vw" : "5vh")};
  max-width: ${(props) => (props.sidebarIsOpen ? "270px" : "80px")};
  min-width: ${(props) => (props.sidebarIsOpen ? "255" : "75px")};

  display: flex;
  flex-direction: column;

  background-color: #adadad;
`;

export const SidebarElements = styled.div`
  width: 100%;
  height: 100%;
`;

export const SettingsSidebarContainer = styled.button<{
  sidebarIsOpen: boolean;
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

    display: ${(props) => (props.sidebarIsOpen ? "block" : "none")};
  }
`;

export const SLogout = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
