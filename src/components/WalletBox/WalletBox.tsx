import React, { useMemo } from "react";
import CountUp from 'react-countup';
import moneyIcon from "../../assets/images/money-icon.svg";
import arrowUpIcon from "../../assets/images/arrow-up.svg";
import arrowDownIcon from "../../assets/images/arrow-down.svg";
import * as S from "./styles";

interface WalletBoxProps {
  color: string;
  title: string;
  amount: number;
  footerLabel: string;
  icon: "Money" | "Arrow up" | "Arrow down";
}

const WalletBox: React.FC<WalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color,
}) => {

  const iconSelected = useMemo(() => {
    switch(icon) {
      case 'Money':
        return moneyIcon
      case 'Arrow up': 
        return arrowUpIcon
      case 'Arrow down':
        return arrowDownIcon
      default:
        return null
    }
  }, [icon])

  return <S.WalletBoxWrapper color={color}>
    <span>{title}</span>
    <h1>
      <CountUp
        duration={1}
        end={amount}
        prefix={"R$ "}
        separator="."
        decimal=","
        decimals={2}
        redraw={true}
      />
    </h1>
    <small>{footerLabel}</small>
    { iconSelected && <img src={iconSelected} alt={title} />}
  </S.WalletBoxWrapper>;
};

export default WalletBox;
