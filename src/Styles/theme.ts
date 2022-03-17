export interface ThemeProps {
  BG: string;
  TopBGPattern: string;
  CardBG: string;
  Text: string;
  SecondaryText: string;
  Toggle: string;
  Slider: string;
}

export const darkTheme: ThemeProps = {
  BG: "var(--Dark-BG)",
  TopBGPattern: "var(--Dark-TopBGPatten)",
  CardBG: "var(--Dark-CardBG)",
  Text: "var(--Dark-Text)",
  SecondaryText: "var(--Dark-SecondaryText)",
  Toggle: "var(--Dark-Toggle)",
  Slider: "var(--Dark-BG)",
};
export const lightTheme: ThemeProps = {
  BG: "var(--Light-BG)",
  TopBGPattern: "var(--Light-TopBGPatten)",
  CardBG: "var(--Light-CardBG)",
  Text: "var(--Light-Text)",
  SecondaryText: "var(--Light-SecondaryText)",
  Toggle: "var(--Light-Toggle)",
  Slider: "var(--Light-BG)",
};
