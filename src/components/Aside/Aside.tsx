import React from "react";
import { AsideWrapper } from "./styles";
import Logo from "../../assets/images/logo.svg";
import * as S from "./styles";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

const Aside: React.FC = () => {
  return (
    <AsideWrapper>
      <S.HeaderWrapper>
        <S.Logo
          src={Logo}
          alt="Logo, apenas três circulos, um vermelho, um amarelo e um verde"
        />
      </S.HeaderWrapper>
      <S.MenuWrapper>
        <S.LinkMenu href="#">
          <MdDashboard /> Dashboard
        </S.LinkMenu>
        <S.LinkMenu href="#">
          <MdArrowUpward /> Appetizer
        </S.LinkMenu>
        <S.LinkMenu href="#">
          <MdArrowDownward />
          Exits
        </S.LinkMenu>
        <S.LinkMenu href="#">
          <MdExitToApp />
          To go out
        </S.LinkMenu>
      </S.MenuWrapper>
    </AsideWrapper>
  );
};

export default Aside;
