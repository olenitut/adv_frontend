import { FC } from "react";
import { Link } from "react-router-dom";
import classNames from "shared/lib/classNames/classNames";

import styles from "./AppLink.module.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type LinkProps = {
  className?: string;
  title: string;
  to: string;
  theme?: AppLinkTheme;
};

const AppLink: FC<LinkProps> = ({
  className,
  title,
  to,
  theme = AppLinkTheme.PRIMARY,
}) => {
  return (
    <Link className={classNames(styles.link, className, styles[theme])} to={to}>
      {title}
    </Link>
  );
};

export default AppLink;
