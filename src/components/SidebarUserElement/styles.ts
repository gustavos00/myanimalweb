import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const UserData = styled.div<{ sidebarisopen: boolean }>`
  height: 100px;
  padding: 0.2rem 0 0.2rem 1.2rem;
  margin-bottom: 0.5rem;

  align-items: center;
  display: flex;

  position: relative;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;

    border-radius: 10px;
  }

  h1 {
    display: ${(props) => (props.sidebarisopen ? "block" : "none")};
    font-weight: normal;
    color: #fff;
  }
`;

export const CloseSidebarIcon = styled(FontAwesomeIcon)<{ sidebarisopen: boolean }>`
  width: 30px;
  height: 15px;

  position: absolute;
  right: 1rem;

  cursor: pointer;

  display: ${(props) => (props.sidebarisopen ? "block" : "none")};
`;

export const Test = styled.div`
`
