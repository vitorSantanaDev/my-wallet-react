import styled from "styled-components";

export const ButtonElement = styled.button`
  width: 100%;
  margin: 8px 0;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  transition: opacity ease-in-out .3s;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.sucess};

  &:hover {
    opacity: 0.8;
  }
`