import React from "react";
import * as S from "./styles";

interface ToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<ToggleProps> = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}) => {
  return (
    <S.ToggleWrapper>
      <S.ToggleLabel>{labelLeft}</S.ToggleLabel>
      <S.ToggleSelector
        checked={checked}
        checkedIcon={false}
        uncheckedIcon={false}
        onChange={onChange}
      />
      <S.ToggleLabel>{labelRight}</S.ToggleLabel>
    </S.ToggleWrapper>
  );
};

export default Toggle;
