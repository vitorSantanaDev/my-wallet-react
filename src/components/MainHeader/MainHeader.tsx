import React, { useMemo } from "react";
import emojis from "../../utils/emojis";
import Toggle from "../Toggle/Toggle";
import * as S from "./styles";

const MainHeader: React.FC = () => {

  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length)
    return emojis[index]
  }, [])

  return (
    <S.MainHeaderElement>
      <Toggle />
      <S.ProfileWrapper>
      <S.WelcomeWrapper>Olá, {emoji}</S.WelcomeWrapper>
      <S.UserWrapper>Vitor Silva</S.UserWrapper>
      </S.ProfileWrapper>
    </S.MainHeaderElement>
  );
};

export default MainHeader;
