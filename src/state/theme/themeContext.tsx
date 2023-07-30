import {
  FC,
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

type Props = {
  children: ReactNode;
};

type Context = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};
const ThemeContext = createContext<Context>({});

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(Theme.LIGHT);
  const defaultVal = useMemo(() => ({ theme, setTheme }), [theme]);
  return (
    <ThemeContext.Provider value={defaultVal}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return { theme, setTheme };
};
