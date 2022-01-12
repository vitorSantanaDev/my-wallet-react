import React from "react";
import * as S from "./styles";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface HitoryBoxProps {
  data: {
    month: string;
    amountAppetizer: number;
    amountOutput: number;
  }[];
  lineColorAmountAppetizer: string;
  lineColorAmountOutput: string;
}

const HistoryBox: React.FC<HitoryBoxProps> = ({
  data,
  lineColorAmountAppetizer,
  lineColorAmountOutput,
}) => {
  return (
    <S.HistoryBoxWrapper>
      <S.ChartHeader>
      <h2>Balance history</h2>
      <S.LegendContainer>
        <S.Legend color={lineColorAmountAppetizer}>
          <div></div>
          <span>Outputs</span>
        </S.Legend>
        <S.Legend color={lineColorAmountOutput}>
          <div></div>
          <span>Outputs</span>
        </S.Legend>
      </S.LegendContainer>
      </S.ChartHeader>
      <S.ChartWrapper>
        <ResponsiveContainer>
          <LineChart
            data={data}
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="month" stroke="#eee" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amountAppetizer"
              name="appetizer"
              stroke={lineColorAmountAppetizer}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="amountOutput"
              name="outputs"
              stroke={lineColorAmountOutput}
              strokeWidth={5}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </S.ChartWrapper>
    </S.HistoryBoxWrapper>
  );
};

export default HistoryBox;
