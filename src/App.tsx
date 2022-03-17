import React from "react";
import { ThemeProvider } from "styled-components";
import HeaderDashboard from "./Containers/HeaderDashboard";
import ThemeContext from "./contexts/ThemeContext";
import useThemeMode from "./hooks/useThemeMode";
import GlobalStyle from "./Styles/global";
import { darkTheme, lightTheme } from "./Styles/theme";

function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <HeaderDashboard ThemeToggler={themeToggler} />
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;
