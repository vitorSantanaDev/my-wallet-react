import styled from "styled-components";

export const LoginWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;

  > h3 {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.white};
  }

  > img {
    width: 50px;
  }
`;

export const FormWrapper = styled.form`
  width: 300px;
  height: 300px;
  padding: 32px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

export const FormTitle = styled.h1`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.white};

  &::after {
    width: 55px;
    content: "";
    display: block;
    margin-top: 4px;
    border-radius: 3px;
    border-bottom: 10px solid ${({ theme }) => theme.colors.sucess};
  }
`;
