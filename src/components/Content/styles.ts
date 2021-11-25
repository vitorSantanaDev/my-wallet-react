import styled from "styled-components";

export const ContentWrapper = styled.div `
  grid-area: CT;
  padding: 24px;
  overflow-y: scroll;
  height: calc(100vh - 70px);
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
`