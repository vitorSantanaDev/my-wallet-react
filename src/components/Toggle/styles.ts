import styled from "styled-components";
import Switch, { ReactSwitchProps } from "react-switch";

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ToggleLabel = styled.span`
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
`

export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) =>({
    onColor: theme.colors.info,
    offColor: theme.colors.warning,
    width: 48,
    height: 16
  })
)<ReactSwitchProps>`
  margin: 0 8px;
`;