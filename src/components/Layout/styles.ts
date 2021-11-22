import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: grid;

  grid-template-columns: 250px 1fr;
  grid-template-rows: 70px auto;
  grid-template-areas: 
  'AS MH'
  'AS CT';
  height: 100vh;
`;
