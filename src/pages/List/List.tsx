import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import HistoryCard from "../../components/HistroyCard/HistoryCard";
import Select from "../../components/Select/Select";
import dark from "../../styles/themes/dark";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatCurrecy from "../../utils/formatCurrent";
import formatDate from "../../utils/formatDate";
import * as S from "./styles";

interface IData {
  id: string;
  description: string;
  amountFormated: string;
  frequency: string;
  dataFormated: string;
  tagColor: string;
}

const List: React.FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const { type } = useParams();

  const titleAndLineColor = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Appetizer", lineColor: dark.colors.sucess }
      : { title: "Exits", lineColor: dark.colors.warning };
  }, [type]);
  const { title, lineColor } = titleAndLineColor;

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  useEffect(() => {
    const response = listData.map((data) => {
      return {
        id: String(Math.random() * listData.length),
        description: data.description,
        amountFormated: formatCurrecy(Number(data.amount)),
        frequency: data.frequency,
        dataFormated: formatDate(data.date),
        tagColor:
          data.frequency === "recorrente"
            ? dark.colors.sucess
            : dark.colors.info,
      };
    });
    setData(response);
  }, [listData]);

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
        {data.map((item, index) => (
          <HistoryCard
            key={index}
            tagColor={item.tagColor}
            title={item.description}
            subTitle={item.dataFormated}
            amount={item.amountFormated}
          />
        ))}
      </S.ListContent>
    </S.ListWrapper>
  );
};

export default List;
