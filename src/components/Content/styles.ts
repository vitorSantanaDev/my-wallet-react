import styled from "styled-components";

export const ContentWrapper = styled.div `
  grid-area: CT;
  padding: 24px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`