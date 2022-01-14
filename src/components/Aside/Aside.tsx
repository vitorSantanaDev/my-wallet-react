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
import { useAuth } from "../../hooks/auth";

const Aside: React.FC = () => {
  const { signOut } = useAuth()
  return (
    <AsideWrapper isOpen={true}>
      <S.HeaderWrapper>
        <S.Logo
          src={Logo}
          alt="Logo, apenas três circulos, um vermelho, um amarelo e um verde"
        />
      </S.HeaderWrapper>
      <S.MenuWrapper>
        <S.LinkMenu href="/">
          <MdDashboard /> Dashboard
        </S.LinkMenu>
        <S.LinkMenu href="/list/entry-balance">
          <MdArrowUpward /> Appetizer
        </S.LinkMenu>
        <S.LinkMenu href="/list/exit-balance">
          <MdArrowDownward />
          Exits
        </S.LinkMenu>
        <S.ButtonSignOut onClick={signOut}>
          <MdExitToApp />
          To go out
        </S.ButtonSignOut>
      </S.MenuWrapper>
    </AsideWrapper>
  );
};

export default Aside;
