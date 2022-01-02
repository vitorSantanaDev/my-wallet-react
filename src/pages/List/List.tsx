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
  const [monthSelected, setMonthSelected] = useState<string>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<string>(
    String(new Date().getFullYear())
  );

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
    const filteredDate = listData.filter((data) => {
      const date = new Date(data.date);
      const month = String(date.getMonth() + 1);
      const year = String(date.getFullYear());

      return month === monthSelected && year === yearSelected;
    });

    const formattedData = filteredDate.map((data) => {
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

    setData(formattedData)
  }, [listData, monthSelected, yearSelected]);

  const monthly = [
    { value: 1, label: "Janeiro" },
    { value: 2, label: "Fevereiro" },
    { value: 3, label: "Março" },
    { value: 4, label: "Abril" },
    { value: 5, label: "Maio" },
    { value: 6, label: "Junho" },
    { value: 7, label: "Julho" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Setembro" },
    { value: 10, label: "Outubro" },
    { value: 11, label: "Novembro" },
    { value: 12, label: "Dezembro" },
  ];

  const years = [
    { value: 2010, label: 2010 },
    { value: 2011, label: 2011 },
    { value: 2013, label: 2013 },
    { value: 2014, label: 2014 },
    { value: 2015, label: 2015 },
    { value: 2016, label: 2016 },
    { value: 2017, label: 2017 },
    { value: 2018, label: 2018 },
    { value: 2019, label: 2019 },
    { value: 2020, label: 2020 },
    { value: 2021, label: 2021 },
    { value: 2022, label: 2022 }
  ];

  return (
    <S.ListWrapper>
      <ContentHeader title={title} lineColor={lineColor}>
        <Select
          defaultValue={monthSelected}
          options={monthly}
          onChange={({ target }) => setMonthSelected(target.value)}
        />
        <Select
          defaultValue={yearSelected}
          options={years}
          onChange={({ target }) => setYearSelected(target.value)}
        />
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
