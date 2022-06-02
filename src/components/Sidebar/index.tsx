import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { faHome, faDoorOpen, faBuilding, faUpload } from "@fortawesome/free-solid-svg-icons";

import UserContext from "../../contexts/user";
import SidebarElement from "../SidebarElement";

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
        <SidebarElement
          sidebarIsOpen={sidebarIsOpen}
          icon={faHome}
          redirect={'/'}
          text={"Home"}
        />
        <SidebarElement
          sidebarIsOpen={sidebarIsOpen}
          icon={faBuilding}
          redirect={'/create'}
          text={"Criar"}
        />
        <SidebarElement
          sidebarIsOpen={sidebarIsOpen}
          icon={faUpload}
          redirect={'/update'}
          text={"Update"}
        />
      </S.SidebarElements>
      <S.SettingsSidebarContainer
        sidebarIsOpen={sidebarIsOpen}
        onClick={handleLogout}
      >
        <S.SLogout icon={faDoorOpen} color={"#fff"} />
        <p>Log-out</p>
      </S.SettingsSidebarContainer>
    </S.Container>
  );
}

export default Sidebar;
