import React, { InputHTMLAttributes } from "react";
import * as S from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...rest }) => (
  <S.InputElement {...rest} />
);

export default Input;
