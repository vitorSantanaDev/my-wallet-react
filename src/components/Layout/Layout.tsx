import React from "react";
import Aside from "../Aside/Aside";
import Content from "../Content/Content";
import MainHeader from "../MainHeader/MainHeader";
import { LayoutWrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <LayoutWrapper>
      <Aside />
      <MainHeader />
      <Content />
    </LayoutWrapper>
  );
};

export default Layout;
