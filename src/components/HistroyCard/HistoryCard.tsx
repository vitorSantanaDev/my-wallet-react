import React from "react";
import * as S from "./styles";

interface HistoryCardProps {
  tagColor: string;
  title: string;
  subTitle: string;
  amount: string;
}

const HistoryCard: React.FC<HistoryCardProps> = ({
  tagColor,
  title,
  subTitle,
  amount,
}) => {
  return (
    <S.HistoryCardWrapper >
        <S.TagElement color={tagColor} />
        <S.CardContent>
          <span>{title}</span>
          <small>{subTitle}</small>
        </S.CardContent>
        <h3>{amount}</h3>
    </S.HistoryCardWrapper>
  );
};

export default HistoryCard;
