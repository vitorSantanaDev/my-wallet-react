import React from "react";
import * as S from "./styles";

interface SelectProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void | undefined;
  defaultValue?: string | number
}

const Select: React.FC<SelectProps> = ({ options, onChange, defaultValue }) => {
  return (
    <S.SelectWrapper>
      <select onChange={onChange} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </S.SelectWrapper>
  );
};

export default Select;
