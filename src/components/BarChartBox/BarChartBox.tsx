import React from "react";
import * as S from "./styles";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";

interface BarChartProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

const BarChartBox: React.FC<BarChartProps> = ({ title, data }) => {
  return (
    <S.BarChartBoxWrapper>
      <S.SideLeft>
        <h2>{title}</h2>
        <S.LegendContainer>
        {data.map((indicator) => (
          <S.Legend key={indicator.name} color={indicator.color}>
            <div>{indicator.percent}%</div>
            <span>{indicator.name}</span>
          </S.Legend>
        ))}
      </S.LegendContainer>
      </S.SideLeft>
      <S.SideRight>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey="amount">
              {data.map((indicator) => (
                <Cell
                  key={indicator.name}
                  cursor="pointer"
                  fill={indicator.color}
                />
              ))}
            </Bar>
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </S.SideRight>
    </S.BarChartBoxWrapper>
  );
};

export default BarChartBox;
