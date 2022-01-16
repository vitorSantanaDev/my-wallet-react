import styled from "styled-components";

export const ContentHeaderWrapper = styled.div `
    width: 100%;
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;

    @media only screen and (max-width: 320px) {
      flex-direction: column;
    }
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

  @media only screen and (max-width: 320px) {
    font-size: 20px;
  }
`

export const ControllersWrapper = styled.div `
  display: flex;

  @media only screen and (max-width: 320px) {
    width: 100%;
    margin-top: 20px;
    align-items: center;
    justify-content: space-around;
  }
`