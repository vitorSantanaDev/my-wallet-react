import styled from "styled-components";

export const AsideWrapper = styled.aside`
  grid-area: AS;
  padding-left: 24px;
  color: ${({ theme }) => theme.colors.white};
  border-right: dashed 1px ${({ theme }) => theme.colors.gray};
  background-color: ${({ theme }) => theme.colors.secondary};
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
