import styled, { keyframes } from "styled-components";

interface WalletBoxWrapperProps {
  color: string;
}

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
`;

export const WalletBoxWrapper = styled.div<WalletBoxWrapperProps>`
  width: 31.2%;
  height: 150px;
  overflow: hidden;
  position: relative;
  padding: 12px 24px;
  border-radius: 10px;
  animation: ${animate} .5s;
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};

  > img {
    top: -10px;
    opacity: 0.3;
    width: 200px;
    right: -50px;
    height: 110%;
    position: absolute;
  }

  > span {
    font-size: 16px;
    font-weight: 500;
  }

  > small {
    bottom: 10px;
    font-size: 14px;
    font-weight: 500;
    position: absolute;
  }

  @media only screen and (max-width: 1366px) {
    width: 31%;
  }

  @media only screen and (max-width: 770px) {
    > span {
      font-size: 14px;
    }

    > h1 {
      font-size: 22px;
      word-wrap: break-word;

      > strong {
        width: 100%;
        font-size: 16px;
        display: inline-block;
      }
    }

    > small {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 420px) {
    width: 100%;
    margin-bottom: 16px;

    > h1 {
      display: flex;

      > strong {
        width: auto;
        font-size: 22px;
        position: initial;

        &::after {
          width: 1px;
          content: " ";
          display: inline-block;
        }
      }
    }

    > small {
      font-size: 14px;
    }
  }
`;
