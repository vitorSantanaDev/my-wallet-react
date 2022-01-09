import styled from "styled-components";

export const MessageBoxWrapper = styled.div`
  width: 48%;
  display: flex;
  height: 260px;
  padding: 32px 24px;
  border-radius: 10px;
  margin: 12px 0 0 11px;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.tertiary};

  > header img {
    width: 35px;
    margin-left: 8px;
  }

  > header h1 {
    display: flex;
    align-items: center;
  }

  > header p {
    font-size: 18px;
  }
`