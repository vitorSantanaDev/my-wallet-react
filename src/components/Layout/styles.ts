import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: grid;
  height: 100vh;
  min-width: 315px;

  grid-template-columns: 250px 1fr;
  grid-template-rows: 70px auto;
  grid-template-areas:
    "AS MH"
    "AS CT";

  @media only screen and (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;
    grid-template-areas:
      "MH"
      "CT";
  }
`;
