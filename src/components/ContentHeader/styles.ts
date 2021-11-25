import styled from "styled-components";

export const ContentHeaderWrapper = styled.div `
    width: 100%;
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;
`

export const Title = styled.h3 `
  color: ${({theme}) => theme.colors.white};

  &::after {
    width: 50px;
    height: 8px;
    content: "";
    display: block;
    margin-top: 8px;
    border-radius: 2px;
    background-color: ${({ color }) => color};
  }
`

export const ControllersWrapper = styled.div `
  display: flex;
  
`