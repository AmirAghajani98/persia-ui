import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ThemeMode = "light" | "dark";
type Direction = "ltr" | "rtl";

interface ThemeContextValue {
  theme: ThemeMode;
  setTheme: (t: ThemeMode) => void;
  dir: Direction;
  setDir: (d: Direction) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider: React.FC<
  React.PropsWithChildren<{
    initialTheme?: ThemeMode;
    initialDir?: Direction;
  }>
> = ({ initialTheme = "light", initialDir = "rtl", children }) => {
  const [theme, setTheme] = useState<ThemeMode>(initialTheme);
  const [dir, setDir] = useState<Direction>(initialDir);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("dir", dir);
  }, [dir]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme, dir, setDir }), [theme, dir]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
