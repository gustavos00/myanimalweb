import * as S from "./styles";

import { useNavigate } from "react-router";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

interface SidebarElementProps {
  icon: any;
  text: string;
  redirect?: string;
  sidebarIsOpen: boolean
}

function SidebarElement({ text, icon, sidebarIsOpen, redirect }: SidebarElementProps) {
  const navigate = useNavigate()
  return (
    <S.Container onClick={() => redirect && navigate(redirect)} sidebarIsOpen={sidebarIsOpen}>
      <S.Icon icon={icon} color={"#fff"} />
      <p>{text}</p>
      <S.RightArrow sidebarIsOpen={sidebarIsOpen} icon={faLongArrowAltRight} color={"#fff"} />
    </S.Container>
  );
}

export default SidebarElement;
