import styled from "styled-components";

interface LegendProps {
  color: string;
}

export const HistoryBoxWrapper = styled.div`
  width: 100%;
  margin: 16px 0;
  padding: 32px 24px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const ChartHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > h2 {
    padding-left: 16px;
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const LegendContainer = styled.ul`
  display: flex;
`;

export const Legend = styled.li<LegendProps>`
  display: flex;
  margin-left: 18px;
  margin-bottom: 8px;
  align-items: center;
  padding-right: 16px;

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

  @media only screen and (max-width: 1280px) {
    > div {
      width: 30px;
      height: 30px;
    }
  }
`;

export const ChartWrapper = styled.div`
  height: 360px;
`;
