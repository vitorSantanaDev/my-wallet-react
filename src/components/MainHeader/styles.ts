import styled from "styled-components";
import Toggle from "../Toggle/Toggle";

export const MainHeaderElement = styled.header`
  grid-area: MH;
  display: flex;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.gray};
`;

export const ProfileWrapper = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;

export const WelcomeWrapper = styled.h3`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const UserWrapper = styled.span`
  font-size: 14px;
  letter-spacing: 2px;
`;

export const ToggleComponent = styled(Toggle)``
