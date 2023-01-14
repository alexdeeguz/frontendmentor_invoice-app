import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.getElementById("body").style.background = darkMode
      ? "#141625"
      : "#F2F2F2";

    document.getElementById("nav").style.background = darkMode
      ? "#1E2139"
      : "#373B53";
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
