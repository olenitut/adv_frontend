import { FC } from "react";
import { Theme, useTheme } from "app/providers/theme/themeContext";
import classNames from "shared/lib/classNames/classNames";
import LightIcon from "../../assets/icons/theme-light.svg";
import DarkIcon from "../../assets/icons/theme-dark.svg";
import Button, { IThemeButton } from "shared/ui/Button/ui/Button";

import styles from "./ThemeSwitch.module.scss";

type themeSwitchProps = {
  className?: string;
};

const ThemeSwitch: FC<themeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      theme={IThemeButton.CLEAR}
      className={classNames(styles.themeSwitch, className)}
      onClick={() => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
    >
      {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};

export default ThemeSwitch;
