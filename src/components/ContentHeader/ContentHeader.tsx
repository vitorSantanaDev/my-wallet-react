import React from "react";
import * as S from "./styles";

interface ContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <S.ContentHeaderWrapper>
      <S.Title color={lineColor}>{title}</S.Title>
      <S.ControllersWrapper>{children}</S.ControllersWrapper>
    </S.ContentHeaderWrapper>
  );
};

export default ContentHeader;
