import React from 'react';
import Layout from './components/Layout/Layout';
import GlobalStyle from './styles/global';
import { ThemeProvider } from "styled-components"
import dark from './styles/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
