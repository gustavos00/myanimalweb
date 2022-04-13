import { UserData } from "../../types/UserData";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";

interface SidebarUserElementProps {
  sidebarIsOpen: boolean;
  setSidebarIsOpen: (e: boolean) => void;
  user: void | UserData;
}

function SidebarUserElement({
  sidebarIsOpen,
  setSidebarIsOpen,
  user,
}: SidebarUserElementProps) {
  return (
    <S.UserData sidebarIsOpen={sidebarIsOpen}>
      <img
        src="https://myanimal.s3.eu-west-3.amazonaws.com/apacc63%40gmail.com-a281b9c4"
        alt="Profile"
      />
      <h1>{user?.givenName}</h1>

      <S.Test>
        <S.CloseSidebarIcon
          icon={faClose}
          color={"#fff"}
          sidebarIsOpen={sidebarIsOpen}
          onClick={() => setSidebarIsOpen(false)}
        />
      </S.Test>
    </S.UserData>
  );
}

export default SidebarUserElement;
