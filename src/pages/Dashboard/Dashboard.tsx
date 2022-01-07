import React, { useState, useMemo } from "react";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Select from "../../components/Select/Select";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import listOfMonths from "../../utils/months"
import * as S from "./styles"

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());
  const options = [{value: "Vitor", label: "Vitor"}, {value: "Cassia", label: "Cassia"}]

  const monthly = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    [...expenses, ...gains].forEach((item) => {
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
  }, []);

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
    <S.DashboardWrapper>
      <ContentHeader title="Dashboard" lineColor="#23abeb">
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
    </S.DashboardWrapper>
  );
};

export default Dashboard;
