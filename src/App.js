import "./App.css";

import LandingPage from "./LandingPage";
import ThemeContext from "./ThemeContext";

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

function App() {
  return (
    <ThemeContext.Provider value={themes.light}>
      <LandingPage />
    </ThemeContext.Provider>
  );
}

export default App;
