import * as S from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

interface SidebarElementProps {
  icon: any;
  text: string;
  redirect?: string;
  sidebarIsOpen: boolean
}

function SidebarElement({ text, icon, sidebarIsOpen }: SidebarElementProps) {
  return (
    <S.Container sidebarIsOpen={sidebarIsOpen}>
      <S.Icon icon={icon} color={"#fff"} />
      <p>{text}</p>
      <S.RightArrow sidebarIsOpen={sidebarIsOpen} icon={faLongArrowAltRight} color={"#fff"} />
    </S.Container>
  );
}

export default SidebarElement;
