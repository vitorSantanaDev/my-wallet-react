import React from "react";
import * as S from "./styles";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface PieChartComponentProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartComponent: React.FC<PieChartComponentProps> = ({ data }) => (
  <S.PieChartComponentWrapper>
    <S.SideLeft>
      <h2>Realação</h2>
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
      <ResponsiveContainer  width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            dataKey="percent"
          >
            {
              data.map((indicator) => (
                <Cell key={indicator.name} fill={indicator.color} />
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </S.SideRight>
  </S.PieChartComponentWrapper>
);

export default PieChartComponent;
