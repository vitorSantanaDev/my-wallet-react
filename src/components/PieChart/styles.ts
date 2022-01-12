import styled from "styled-components";

interface LegendProps {
  color: string;
}

export const PieChartComponentWrapper = styled.div`
  width: 48%;
  height: 260px;
  display: flex;
  margin: 16px 0;
  padding: 32px 24px;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const SideLeft = styled.aside`
  padding: 32px 24px;

  > h2 {
    margin-bottom: 24px;
  }
`;

export const LegendContainer = styled.ul`
  max-height: 155px;
  overflow-y: scroll;
  padding-right: 16px;
`;

export const Legend = styled.li<LegendProps>`
  display: flex;
  margin-bottom: 8px;
  align-items: center;

  > div {
    width: 45px;
    height: 45px;
    font-size: 16px;
    line-height: 40px;
    border-radius: 5px;
    text-align: center;
    background-color: ${({ color }) => color};
  }

  > span {
    font-weight: 600;
    margin-left: 8px;
  }
`;

export const SideRight = styled.main`
  flex: 1;
  display: flex;
  height: 260px;
  justify-content: center;
`;
