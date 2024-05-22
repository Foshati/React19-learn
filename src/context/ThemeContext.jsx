import { createContext, useState } from "react";
// create Context
export const ThemeContext = createContext();

// Context Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
