import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import HistoryCard from "../../components/HistroyCard/HistoryCard";
import Select from "../../components/Select/Select";
import dark from "../../styles/themes/dark"
import * as S from "./styles";

const List: React.FC = () => {
  const { type } = useParams();

  const titleAndLineColor = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Appetizer", lineColor: dark.colors.sucess }
      : { title: "Exits", lineColor: dark.colors.warning };
  }, [type]);

  const { title, lineColor } = titleAndLineColor

  const monthly = [
    { value: 11, label: "Novembro" },
    { value: 10, label: "Outubro" },
    { value: 9, label: "Setembro" },
    { value: 8, label: "Agosto" },
  ];

  const years = [
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 },
    { value: 2018, label: 2018 },
  ];

  return (
    <S.ListWrapper>
      <ContentHeader title={title} lineColor={lineColor}>
        <Select options={monthly} />
        <Select options={years} />
      </ContentHeader>

      <S.Filters>
        <button type="button" className="tagFilter recurrent">
          Recurrents
        </button>
        <button type="button" className="tagFilter eventual">
          Eventual
        </button>
      </S.Filters>

      <S.ListContent>
        <HistoryCard
          tagColor="#1ECA5F"
          title="Internet"
          subTitle="20/11/20"
          amount="R$ 50,00"
        />
      </S.ListContent>
    </S.ListWrapper>
  );
};

export default List;
