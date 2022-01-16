import styled, { keyframes } from "styled-components";

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
`

export const MessageBoxWrapper = styled.div`
  width: 48%;
  display: flex;
  height: 260px;
  margin: 16px 0;
  padding: 32px 24px;
  border-radius: 10px;
  flex-direction: column;
  animation: ${animate} .5s;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};

  > header img {
    width: 35px;
    margin-left: 8px;
  }

  > header h1 {
    display: flex;
    align-items: center;
  }

  > header p {
    font-size: 18px;
  }

  @media only screen and (max-width: 770px) {
    width: 100%;
    > header h1 {
      font-size: 32px;

      img {
        width: 40px;
        height: 40px;
      }
    }

    > header p {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 420px) {
    width: 100%;
    height: auto;

    > header p {
      margin-bottom: 16px;
    }
  }
`;
