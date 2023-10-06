import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-schema:dark"
  ).matches;
  return prefersDarkMode;
};

export const AppProvider = ({ children }) => {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState("cat");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", newDarkTheme);
  };

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
