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

  @media only screen and (max-width: 770px) {
    width: 100%;
    display: flex;
  }
`;

export const SideLeft = styled.aside`
  padding: 32px 24px;

  > h2 {
    margin-bottom: 24px;
  }

  @media only screen and (max-width: 1345px) {
    margin-bottom: 8px;
    padding: 0 16px 8px;

    > h2 {
      margin-top: 16px;
      margin-bottom: 8px;
    }
  }

  @media only screen and (max-width: 1345px) {
    padding: 16px;
    margin-bottom: 8px;
  }
`;

export const LegendContainer = styled.ul`
  max-height: 155px;
  overflow-y: auto;
  padding-right: 16px;

  @media only screen and (max-width: 1345px) {
    display: flex;
    flex-direction: column;
  }
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

  @media only screen and (max-width: 1345px) {
    margin: 8px 0;
    font-size: 14px;

    > div {
      width: 45px;
      height: 45px;
      line-height: 45px;
    }

    > span {
      margin-left: 8px;
    }
  }
`;

export const SideRight = styled.main`
  flex: 1;
  display: flex;
  height: 260px;
  justify-content: center;

  @media only screen and (max-width: 1345px) {
    height: 100%;
  }
`;
