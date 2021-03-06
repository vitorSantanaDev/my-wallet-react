import styled, { keyframes } from "styled-components";
interface TagElementProps {
  color: string;
}

const animate = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const HistoryCardWrapper = styled.li`
  margin: 12px;
  display: flex;
  cursor: pointer;
  padding: 12px 12px;
  border-radius: 5px;
  position: relative;
  align-items: center;
  transition: ease-in-out 0.3s;
  justify-content: space-between;
  animation: ease-in-out ${animate} .5s;
  background-color: ${({ theme }) => theme.colors.tertiary};

  &:hover {
    opacity: 0.7;
    transform: translateX(8px);
  }
`;

export const TagElement = styled.div<TagElementProps>`
  left: 0;
  width: 10px;
  height: 60%;
  position: absolute;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: ${({ color }) => color};
`;

export const CardContent = styled.div`
  display: flex;
  padding-left: 12px;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 18px;
    font-weight: 600;
  }
`;
