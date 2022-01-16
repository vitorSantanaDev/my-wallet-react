import styled, { keyframes } from "styled-components";

const animate = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`

export const BarChartBoxWrapper = styled.div`
  width: 48%;
  display: flex;
  margin: 16px 0;
  min-height: 260px;
  border-radius: 8px;
  animation: ${animate} .5s;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};

  @media only screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
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
  padding-right: 16px;

  @media only screen and (max-width: 1200px) {
    display: flex;
    height: auto;
    justify-content: space-evenly;
  }
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

  @media only screen and (max-width: 1200px) {
   > div {
    width: 30px;
    height: 30px;
    font-size: 10px;
    line-height: 30px;
    text-align: center;
   }
  }
`;

export const SideRight = styled.main`
  flex: 1;
  padding: 36px;
  display: flex;
  min-height: 150px;
  justify-content: center;
`;
