import React from "react";
import { ContentWrapper } from "./styles";

const Content: React.FC = ({ children }) => {
  return (
    <ContentWrapper>
      { children }
    </ContentWrapper>
  );
};

export default Content;
