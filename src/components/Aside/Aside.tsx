import React, { useState } from "react";
import { AsideWrapper } from "./styles";
import Logo from "../../assets/images/logo.svg";
import * as S from "./styles";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from "react-icons/md";
import { useAuth } from "../../hooks/auth";
import { useTheme } from "../../hooks/theme";
import { ToggleComponent } from "../MainHeader/styles";

const Aside: React.FC = () => {
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState<boolean>(false);
  const { toggleTheme, theme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );
  const { signOut } = useAuth();

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  const handleChangeThemeColor = () => {
    toggleTheme()
    setDarkTheme(!darkTheme);
  };
  return (
    <AsideWrapper isOpen={toggleMenuIsOpened}>
      <S.HeaderWrapper>
        <S.ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </S.ToggleMenu>
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
      <S.ThemeToggleFooter isOpen={toggleMenuIsOpened}>
        <ToggleComponent
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeThemeColor}
        />
      </S.ThemeToggleFooter>
    </AsideWrapper>
  );
};

export default Aside;
