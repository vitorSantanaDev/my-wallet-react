import React, { useMemo, useState } from "react";
import { useTheme } from "../../hooks/theme";
import emojis from "../../utils/emojis";
import * as S from "./styles";

const MainHeader: React.FC = () => {

  const { theme, toggleTheme } = useTheme();
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length)
    return emojis[index]
  }, [])

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme)
    toggleTheme()
  }

  return (
    <S.MainHeaderElement>
      <S.ToggleComponent 
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />
      <S.ProfileWrapper>
      <S.WelcomeWrapper>Hello, {emoji}</S.WelcomeWrapper>
      <S.UserWrapper>Vitor Santana</S.UserWrapper>
      </S.ProfileWrapper>
    </S.MainHeaderElement>
  );
};

export default MainHeader;
