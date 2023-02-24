import { createContext } from "react";

const themes = {
  light: {
    foreground: "#f107ba",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext(themes.dark);

export default ThemeContext;
