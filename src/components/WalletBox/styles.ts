import styled from "styled-components";

interface WalletBoxWrapperProps {
  color: string
}

export const WalletBoxWrapper = styled.div<WalletBoxWrapperProps>`
  width: 31.2%;
  height: 150px;
  overflow: hidden;
  position: relative;
  padding: 12px 24px;
  border-radius: 10px;
  background-color: ${({ color }) => color };
  color: ${({ theme }) => theme.colors.white};

  > img {
    top: -10px;
    opacity: .3;
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
`