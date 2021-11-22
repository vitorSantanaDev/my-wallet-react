import styled from "styled-components";

export const ContentWrapper = styled.div `
  grid-area: CT;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`