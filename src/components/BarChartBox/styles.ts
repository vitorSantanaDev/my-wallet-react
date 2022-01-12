import styled from "styled-components";

export const BarChartBoxWrapper = styled.div`
  width: 48%;
  display: flex;
  margin: 16px 0;
  min-height: 260px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const SideLeft = styled.aside`
  flex: 1;
  padding: 24px 16px;

  > h2 {
    padding-left: 16px;
    margin-bottom: 16px;
  }
`;

export const LegendContainer = styled.ul`
  max-height: 155px;
  overflow-y: scroll;
  padding-right: 16px;
`;

export const Legend = styled.li`
  display: flex;
  padding-left: 16px;
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
  padding: 36px;
  display: flex;
  min-height: 150px;
  justify-content: center;
`;
