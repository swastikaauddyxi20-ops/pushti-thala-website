import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext =
  createContext();

export const ThemeProvider = ({
  children,
}) => {
  const [darkMode, setDarkMode] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "theme"
        );

      return saved
        ? JSON.parse(saved)
        : true;
    });

  useEffect(() => {
    localStorage.setItem(
      "theme",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () =>
  useContext(ThemeContext);