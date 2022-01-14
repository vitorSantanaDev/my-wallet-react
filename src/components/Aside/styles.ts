import styled, { css } from "styled-components";

interface AsideWrapperProps {
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
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 64px;

  @media only screen and (max-width: 600px) {
    max-width: 25px;
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
