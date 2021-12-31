import React from "react";
import ContentHeader from "../../components/ContentHeader/ContentHeader";
import Select from "../../components/Select/Select";
import * as S from "./styles"

const Dashboard: React.FC = () => {

  const options = [{value: "Vitor", label: "Vitor"}, {value: "Cassia", label: "Cassia"}]

  return (
    <S.DashboardWrapper>
      <ContentHeader title="Dashboard" lineColor="#E9766B">
        <Select options={options}/>
      </ContentHeader>
    </S.DashboardWrapper>
  );
};

export default Dashboard;
