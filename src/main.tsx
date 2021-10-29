import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import { EmployeeProvider } from "./contexts/employee";
import { GlobalStyles } from "./styles/globalStyles";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <EmployeeProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      <GlobalStyles />
    </EmployeeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
