import styled from "styled-components";

export const MainHeaderElement = styled.header `
  grid-area: MH;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
`