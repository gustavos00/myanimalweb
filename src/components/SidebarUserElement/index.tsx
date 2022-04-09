import { UserData } from "../../types/UserData";

import * as S from "./styles";

interface SidebarUserElementProps {
  sidebarIsOpen: boolean;
  user: void | UserData;
}

function SidebarUserElement({ sidebarIsOpen, user }: SidebarUserElementProps) {
  return (
    <S.UserData sidebarIsOpen={sidebarIsOpen}>
      <img
        src="https://myanimal.s3.eu-west-3.amazonaws.com/apacc63%40gmail.com-a281b9c4"
        alt="Profile"
      />
      <h1>{user?.givenName}</h1>
    </S.UserData>
  );
}

export default SidebarUserElement;
