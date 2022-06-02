import { UserData } from "../../types/UserData";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

interface SidebarUserElementProps {
  sidebarisopen: boolean;
  user: void | UserData;
}

function SidebarUserElement({ sidebarisopen, user }: SidebarUserElementProps) {
  return (
    <S.UserData sidebarisopen={sidebarisopen}>
      <img
        src="https://myanimal.s3.eu-west-3.amazonaws.com/apacc63%40gmail.com-a281b9c4"
        alt="Profile"
      />
      <h1>{user?.givenName}</h1>

      <S.CloseSidebarIcon icon={faClose} color={'#fff'} sidebarisopen={sidebarisopen}/>
    </S.UserData>
  );
}

export default SidebarUserElement;
