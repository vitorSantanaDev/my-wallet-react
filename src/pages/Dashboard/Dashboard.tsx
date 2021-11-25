import React from "react";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import * as S from "./styles"

const Dashboard: React.FC = () => {
  return (
    <S.DashboardWrapper>
      <ContentHeader />
    </S.DashboardWrapper>
  );
};

export default Dashboard;
