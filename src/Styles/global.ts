import { createGlobalStyle, withTheme } from "styled-components";

import { ThemeProps } from "./theme";

type GlobalThemeProps = {
  theme: ThemeProps;
};
const globalStyle = createGlobalStyle` 

:root {
  //Screens
  --Mobile: 375px;
  --Desktop: 1440px;

//Primary Colors
  --LimeGreen: hsl(163, 72%, 41%);
  --BrightRed: hsl(356, 69%, 56%);

  //Social Media Colors
  --Facebook: linear-gradient(to right,hsl(208, 92%, 53%),hsl(208, 92%, 53%));
  --Twitter: hsl(203, 89%, 53%);
  --Instagram: linear-gradient(to right,hsl(37, 97%, 70%),hsl(329, 70%, 58%));
  --YouTube: hsl(348, 97%, 39%);

  //Dark Mode
  --Dark-BG: hsl(230, 17%, 14%);
  --Dark-TopBGPatten: hsl(232, 19%, 15%);
  --Dark-CardBG: hsl(228, 28%, 20%);
  --Dark-SecondaryText: hsl(228, 34%, 66%);
  --Dark-Text: hsl(0, 0%, 100%);
  --Dark-Toggle: linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 55%));

  //Light Mode
  --Light-BG: hsl(0, 0%, 100%);
  --Light-TopBGPatten: hsl(225, 100%, 98%);
  --Light-CardBG: hsl(227, 47%, 96%);
  --Light-SecondaryText: hsl(228, 12%, 44%);
  --Light-Text: hsl(230, 17%, 14%);
  --Light-Toggle: hsl(230, 22%, 74%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  height: 100vh;
  width: 50vw;
  margin: 0 auto;
  background-color: ${({ theme }: GlobalThemeProps) => theme.BG};
  display: flex;
  justify-content: center;
  font-family: 'Inter', sans-serif;
}

`;

export default withTheme(globalStyle);
