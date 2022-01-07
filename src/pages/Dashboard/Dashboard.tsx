import React, { useState, useMemo } from "react";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Select from "../../components/Select/Select";
import WalletBox from "../../components/WalletBox/WalletBox";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import listOfMonths from "../../utils/months";
import dark from "../../styles/themes/dark";
import * as S from "./styles";

const Dashboard: React.FC = () => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  );
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  );
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
      const parseMonth = Number(month);
      setMonthSelected(parseMonth);
    } catch (error) {
      throw new Error("Invalid month value. Is accept 0 - 24.");
    }
  };

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year);
      setYearSelected(parseYear);
    } catch (error) {
      throw new Error("Invalid year value. Is accept integer numbers.");
    }
  };

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
      <S.ContentDashboard>
        <WalletBox
          color={dark.colors.sucess}
          icon="Money"
          title="Saldo"
          amount={150}
          footerLabel="Atualizado com base nas entradas e saídas."
        />
        <WalletBox
          color={dark.colors.info}
          icon="Arrow up"
          title="Entradas"
          amount={5000.00}
          footerLabel="Atualizado com base nas entradas e saídas."
        />
        <WalletBox
          color={dark.colors.warning}
          icon="Arrow down"
          title="Saídas"
          amount={4800.00}
          footerLabel="Atualizado com base nas entradas e saídas."
        />
      </S.ContentDashboard>
    </S.DashboardWrapper>
  );
};

export default Dashboard;
