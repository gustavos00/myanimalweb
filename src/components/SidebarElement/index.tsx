import * as S from "./styles";

import { useNavigate } from "react-router";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

interface SidebarElementProps {
  icon: any;
  text: string;
  redirect?: string;
  sidebarisopen: boolean
}

function SidebarElement({ text, icon, sidebarisopen, redirect }: SidebarElementProps) {
  const navigate = useNavigate()
  return (
    <S.Container onClick={() => redirect && navigate(redirect)} sidebarisopen={sidebarisopen}>
      <S.Icon icon={icon} color={"#fff"} />
      <p>{text}</p>
      <S.RightArrow sidebarisopen={sidebarisopen} icon={faLongArrowAltRight} color={"#fff"} />
    </S.Container>
  );
}

export default SidebarElement;
