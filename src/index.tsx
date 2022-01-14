import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ThemeProviderContext from "./hooks/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProviderContext>
      <App />
    </ThemeProviderContext>
  </React.StrictMode>,
  document.getElementById("root")
);
