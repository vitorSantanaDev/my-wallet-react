import React from "react";
import * as S from "./styles";

interface SelectProps {
  options: {
    value: string | number;
    label: string;
  }[];
}

const Select: React.FC<SelectProps> = ({ options }) => {
  return (
    <S.SelectWrapper>
      <select name="" id="">
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </S.SelectWrapper>
  );
};

export default Select;
