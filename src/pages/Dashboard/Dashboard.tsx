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
import PieChartComponent from "../../components/PieChart/PieChart";

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
        title: "That sad.",
        description: "This month, you spent more than you should.",
        footerText: "Check your spending and try to cut out some unnecessary stuff.",
        icon: SadImage
      }
    } else if(totalBalance === 0) {
      return {
        title: "Phew!",
        description: "This month, you spent exactly what you earned.",
        footerText: "Take care. Next time try to save your money.",
        icon: TiredImage
      }
    } else {
      return {
        title: "Very good!",
        description: "Your wallet is positive.",
        footerText: "Consider investing your money.",
        icon: HappyImage
      }
    }
  }, [totalBalance])

  const realationExepensesVersusGains = useMemo(() => {
    const total = totalGains + totalExpenses
    const gainsPercent = (totalGains / total) * 100
    const expensesPercent = (totalExpenses / total) * 100
    
    const data = [
      {
        name: "Appetizer",
        value: totalGains,
        percent: Number(gainsPercent.toFixed(1)),
        color: dark.colors.info
      },
      {
        name: 'Outputs',
        value: totalExpenses,
        percent: Number(expensesPercent.toFixed(1)),
        color: dark.colors.warning
      }
    ]

    return data

  }, [totalGains, totalExpenses])

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
          title="Balance"
          amount={totalBalance}
          footerLabel="Updated based on inputs and outputs."
        />
        <WalletBox
          color={dark.colors.info}
          icon="Arrow up"
          title="Appetizer"
          amount={totalGains}
          footerLabel="Updated based on inputs and outputs."
        />
        <WalletBox
          color={dark.colors.warning}
          icon="Arrow down"
          title="Outputs"
          amount={totalExpenses}
          footerLabel="Updated based on inputs and outputs."
        />
        <MessageBox  
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
        <PieChartComponent data={realationExepensesVersusGains} />
      </S.ContentDashboard>
    </S.DashboardWrapper>
  );
};

export default Dashboard;
