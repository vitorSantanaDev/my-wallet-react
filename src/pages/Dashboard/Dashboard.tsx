import React, { useState, useMemo } from "react";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Select from "../../components/Select/Select";
import WalletBox from "../../components/WalletBox/WalletBox";
import expenses from "../../repositories/expenses";
import gains from "../../repositories/gains";
import listOfMonths from "../../utils/months";
import dark from "../../styles/themes/dark";
import * as S from "./styles";
import MessageBox from "../../components/MessageBox";
import HappyImage from "../../assets/images/face-happy.svg"
import SadImage from "../../assets/images/sad.svg"
import TiredImage from "../../assets/images/tired.svg"

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

  const totalExpenses = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if(month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch(error) {
          throw new Error('Invalid amount! Amount must be number.')
        }
      }
    })
    return total
  }, [monthSelected, yearSelected])

  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date)
      const year = date.getFullYear()
      const month = date.getMonth() + 1

      if(month === monthSelected && year === yearSelected) {
        try {
          total += Number(item.amount)
        } catch(error) {
          throw new Error('Invalid amount! Amount must be number.')
        }
      }
    })
    return total
  }, [monthSelected, yearSelected])

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses
  }, [totalGains, totalExpenses])

  const message = useMemo(() => {
    if(totalBalance < 0) {
      return {
        title: "Que triste",
        description: "Neste mês, você gastou mais do que deveria.",
        footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
        icon: SadImage
      }
    } else if(totalBalance === 0) {
      return {
        title: "Ufaaa!",
        description: "Neste mês, você gastou exatamente o que ganhou.",
        footerText: "Tenha cuidado. No próximo tente poupar seu dinheiro.",
        icon: TiredImage
      }
    } else {
      return {
        title: "Muito bem!",
        description: "Sua carteira está positiva.",
        footerText: "Considere investir seu dinheiro.",
        icon: HappyImage
      }
    }
  }, [totalBalance])

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
          amount={totalBalance}
          footerLabel="Atualizado com base nas entradas e saídas."
        />
        <WalletBox
          color={dark.colors.info}
          icon="Arrow up"
          title="Entradas"
          amount={totalGains}
          footerLabel="Atualizado com base nas entradas e saídas."
        />
        <WalletBox
          color={dark.colors.warning}
          icon="Arrow down"
          title="Saídas"
          amount={totalExpenses}
          footerLabel="Atualizado com base nas entradas e saídas."
        />
        <MessageBox  
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
      </S.ContentDashboard>
    </S.DashboardWrapper>
  );
};

export default Dashboard;
