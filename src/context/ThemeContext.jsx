// src/context/ThemeContext.jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("theme1"); // default theme

  const toggleTheme = () => {
    setTheme((prev) => (prev === "theme1" ? "theme2" : "theme1"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
