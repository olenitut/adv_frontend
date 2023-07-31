import { Theme, useTheme } from "app/providers/theme/themeContext";
import classNames from "shared/lib/classNames/classNames";

import styles from "./ThemeSwitch.module.scss";
import { FC } from "react";

type themeSwitchProps = {
  className?: string;
};

const ThemeSwitch: FC<themeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className={classNames(styles.themeSwitch, className)}
      onClick={() => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
    >
      {theme === Theme.LIGHT ? "Dark mode" : "Light mode"}
    </button>
  );
};

export default ThemeSwitch;
