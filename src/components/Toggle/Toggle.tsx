import React from "react";
import * as S from "./styles";

const Toggle = () => {
  return (
    <S.ToggleWrapper>
      <S.ToggleLabel>Light</S.ToggleLabel>
      <S.ToggleSelector
        checked={true}
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={() => console.log("mudou")}
      />
      <S.ToggleLabel>Dark</S.ToggleLabel>
    </S.ToggleWrapper>
  );
};

export default Toggle;
