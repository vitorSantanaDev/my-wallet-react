import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import List from "../pages/List/List";
import Layout from "../components/Layout/Layout";

const AppRoutes: React.FC = () => {
  return (
    <Layout>
        <Routes>
          <Route path="/dashboard"  element={<Dashboard />} />
          <Route path="/list/:type" element={<List  />} />
        </Routes>
    </Layout>
  );
};

export default AppRoutes;
