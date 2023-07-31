import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import classNames from "shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export enum IThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: IThemeButton;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ className, children, theme, ...rest }) => {
  return (
    <button
      {...rest}
      className={classNames(className, styles.button, styles[theme])}
    >
      {children}
    </button>
  );
};

export default Button;
