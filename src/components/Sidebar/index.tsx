import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faHome, faDoorOpen } from "@fortawesome/free-solid-svg-icons";

import UserContext from "../../contexts/user";
import SidebarElement from "../SidebarElement";
import Underline from "../Underline";

import * as S from "./styles";
import SidebarUserElement from "../SidebarUserElement";

function Sidebar() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <S.Container
      sidebarIsOpen={sidebarIsOpen}
      onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
    >
      <SidebarUserElement sidebarIsOpen={sidebarIsOpen} user={user} />
      <S.SidebarElements>
        <SidebarElement sidebarIsOpen={sidebarIsOpen} icon={faHome} text={"Home"} />
        <SidebarElement sidebarIsOpen={sidebarIsOpen} icon={faHome} text={"teste"} />
        <SidebarElement sidebarIsOpen={sidebarIsOpen} icon={faHome} text={"teste"} />
        <SidebarElement sidebarIsOpen={sidebarIsOpen} icon={faHome} text={"teste"} />
      </S.SidebarElements>
      <S.SettingsSidebarContainer sidebarIsOpen={sidebarIsOpen} onClick={handleLogout}>
        <S.SLogout icon={faDoorOpen} color={"#fff"} />
        <p>Log-out</p>
      </S.SettingsSidebarContainer>
    </S.Container>
  );
}

export default Sidebar;
