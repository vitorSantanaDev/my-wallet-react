import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import HistoryCard from "../../components/HistroyCard/HistoryCard";
import Select from "../../components/Select/Select";
import dark from "../../styles/themes/dark";
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import formatCurrecy from "../../utils/formatCurrent";
import formatDate from "../../utils/formatDate";
import listOfmonths from "../../utils/months";
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
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const [selectedFreaquency, setSelectedFrequency] = useState<string[]>([
    "recorrente",
    "eventual",
  ]);

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
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return (
        month === monthSelected &&
        year === yearSelected &&
        selectedFreaquency.includes(data.frequency)
      );
    });

    const formattedData = filteredDate.map((data) => {
      return {
        id: uuidv4(),
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

    setData(formattedData);
  }, [listData, monthSelected, yearSelected, selectedFreaquency]);

  const monthly = useMemo(() => {
    return listOfmonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listData.forEach((item) => {
      const date = new Date(item.date);
      const yaer = date.getFullYear();

      if (!uniqueYears.includes(yaer)) {
        uniqueYears.push(yaer);
      }
    });
    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [listData]);

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFreaquency.findIndex(
      (item) => item === frequency
    );
    if (alreadySelected >= 0) {
      const filtered = selectedFreaquency.filter((item) => item !== frequency);
      setSelectedFrequency(filtered);
    } else {
      setSelectedFrequency((prevState) => [...prevState, frequency]);
    }
  };

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    }
    catch(error) {
      throw new Error('Invalid month value. Is accept 0 - 24.')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setYearSelected(parseYear)
    }  
    catch(error) {
      throw new Error('Invalid year value. Is accept integer numbers.')
    }
  }

  return (
    <S.ListWrapper>
      <ContentHeader title={title} lineColor={lineColor}>
        <Select
          defaultValue={monthSelected}
          options={monthly}
          onChange={({ target }) => handleMonthSelected(target.value)}
        />
        <Select
          defaultValue={yearSelected}
          options={years}
          onChange={({ target }) => handleYearSelected(target.value)}
        />
      </ContentHeader>

      <S.Filters>
        <button
          type="button"
          className={`tagFilter recurrent ${
            selectedFreaquency.includes("recorrente") && "tag-actived"
          }`}
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recurrents
        </button>
        <button
          type="button"
          className={`tagFilter eventual ${
            selectedFreaquency.includes("eventual") && "tag-actived"
          }`}
          onClick={() => handleFrequencyClick("eventual")}
        >
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
