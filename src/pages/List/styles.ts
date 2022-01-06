import styled from "styled-components";

export const ListWrapper = styled.div``;

export const ListContent = styled.main``;

export const Filters = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 32px;
  justify-content: center;

  .tagFilter {
    opacity: 0.4;
    margin: 0 10px;
    font-size: 18px;
    background: none;
    font-weight: 500;
    transition: opacity ease-in-out 0.3s;
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      opacity: 0.7;
    }

    &.recurrent {
      &::after {
        content: "";
        width: 55px;
        display: block;
        margin: 8px auto;
        border-radius: 4px;
        border-bottom: 10px solid ${({ theme }) => theme.colors.sucess};
      }
    }

    &.eventual {
      &::after {
        content: "";
        width: 55px;
        display: block;
        margin: 8px auto;
        border-radius: 4px;
        border-bottom: 10px solid ${({ theme }) => theme.colors.info};
      }
    }
  }

  .tag-actived {
    opacity: 1;
  }
`;
