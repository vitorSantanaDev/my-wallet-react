import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeProviderContext from "./hooks/theme";
import AuthProvider from "./hooks/auth";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProviderContext>
        <App />
      </ThemeProviderContext>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
