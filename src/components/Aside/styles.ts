import styled, { css } from "styled-components";

interface AsideWrapperProps {
  isOpen: boolean;
}

interface ThemeToggleFooterProps {
  isOpen: boolean;
}

export const AsideWrapper = styled.aside<AsideWrapperProps>`
  grid-area: AS;
  padding-left: 24px;
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-right: dashed 1px ${({ theme }) => theme.colors.gray};

  @media only screen and (max-width: 600px) {
    width: 220px;
    z-index: 1000;
    position: fixed;
    overflow: hidden;
    padding-left: 8px;
    height: ${({ isOpen }) => (isOpen ? "100vh" : "70px")};

    ${({ isOpen }) =>
      !isOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
      `}
  }
`;

export const HeaderWrapper = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 64px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const MenuWrapper = styled.nav`
  display: flex;
  margin-top: 48px;
  flex-direction: column;
`;

export const LinkMenu = styled.a`
  display: flex;
  margin: 8px 0;
  padding: 8px 16px;
  align-items: center;
  transition: opacity ease-in-out 0.2s;
  color: ${({ theme }) => theme.colors.link};

  &:hover {
    opacity: 70%;
  }

  > svg {
    font-size: 18px;
    margin-right: 8px;
  }
`;

export const ButtonSignOut = styled.button`
  border: none;
  display: flex;
  font-size: 18px;
  cursor: pointer;
  background: none;
  padding: 8px 16px;
  align-items: center;
  transition: opacity ease-in-out 0.2s;
  color: ${({ theme }) => theme.colors.link};

  &:hover {
    opacity: 70%;
  }

  > svg {
    font-size: 18px;
    margin-right: 8px;
  }
`;

export const ToggleMenu = styled.button`
  width: 40px;
  height: 40px;
  display: none;
  cursor: pointer;
  font-size: 24px;
  margin-left: 24px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  transition: opacity ease-in-out .3;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.warning};

  &:hover {
    opacity: 0.7;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
  }
`

export const ThemeToggleFooter = styled.footer<ThemeToggleFooterProps>`
  bottom: 30px;
  display: none;
  padding: 16px;
  position: absolute;

  @media only screen and (max-width: 470px) {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  }
`
