import styled from "styled-components";

export const AsideWrapper = styled.aside `
  grid-area: AS;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
`