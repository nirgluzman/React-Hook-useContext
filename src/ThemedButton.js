import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemedButton = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme.background,
        color: theme.foreground,
        borderColor: theme.foreground,
      }}
    >
      {children}
    </button>
  );
};

export default ThemedButton;
