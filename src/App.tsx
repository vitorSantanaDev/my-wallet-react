import React from 'react';
import Layout from './components/Layout/Layout';
import GlobalStyle from './styles/global';
import { ThemeProvider } from "styled-components"
import dark from './styles/themes/dark';
import Dashboard from './pages/Dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Layout>
        <Dashboard />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
