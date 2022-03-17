import React from "react";
import GlobalStyle from "./Styles/global";
import { ThemeProvider } from "styled-components";
import TogglerButton from "./Components/TogglerButton";
import ThemeContext from "./contexts/ThemeContext";
import useThemeMode from "./hooks/useThemeMode";
import { darkTheme, lightTheme } from "./Styles/theme";

function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === "dark" ? darkTheme : lightTheme;
  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <header>
          <TogglerButton ThemeToggler={themeToggler} />
        </header>
      </ThemeProvider>
    </ThemeContext>
  );
}

export default App;
