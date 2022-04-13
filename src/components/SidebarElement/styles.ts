import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div<{ sidebarIsOpen: boolean }>`
  height: 60px;
  padding: ${(props) =>
    props.sidebarIsOpen ? "0.2rem 0 0.2rem 1.2rem" : "0.2rem 0 0.2rem 0rem"};
  margin-bottom: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: ${(props) => !props.sidebarIsOpen && "center"};

  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s ease-in-out;
  position: relative;

  background: #4f4f4f;

  &:hover {
    opacity: 1;
  }

  p {
    color: #fff;
    font-size: 18px;

    display: ${(props) => (props.sidebarIsOpen ? "block" : "none")};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;

  margin-right: 10px;
`;

export const RightArrow = styled(FontAwesomeIcon)<{ sidebarIsOpen: boolean }>`
  width: 30px;
  height: 15px;

  display: ${(props) => (props.sidebarIsOpen ? "block" : "none")};

  position: absolute;
  right: 1rem;
`;
