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

  const [sidebarisopen, setsidebarisopen] = useState(false);

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <S.Container
      sidebarisopen={sidebarisopen}
      onClick={() => setsidebarisopen(!sidebarisopen)}
    >
      <SidebarUserElement sidebarisopen={sidebarisopen} user={user} />
      <S.SidebarElements>
        <SidebarElement
          sidebarisopen={sidebarisopen}
          icon={faHome}
          redirect={'/'}
          text={"Home"}
        />
        <SidebarElement
          sidebarisopen={sidebarisopen}
          icon={faBuilding}
          redirect={'/create'}
          text={"Criar Relatorio"}
        />
        <SidebarElement
          sidebarisopen={sidebarisopen}
          icon={faUpload}
          redirect={'/update'}
          text={"Atualizar Relatorio"}
        />
      </S.SidebarElements>
      <S.SettingsSidebarContainer
        sidebarisopen={sidebarisopen}
        onClick={handleLogout}
      >
        <S.SLogout icon={faDoorOpen} color={"#fff"} />
        <p>Log-out</p>
      </S.SettingsSidebarContainer>
    </S.Container>
  );
}

export default Sidebar;
