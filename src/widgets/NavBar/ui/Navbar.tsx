import { FC } from "react";
import classNames from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";

import styles from "./Navbar.module.scss";

type NavbarProps = {
  className?: string;
};

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.navbar, className)}>
      <div className={styles.links}>
        <AppLink to="/" title="Main" theme={AppLinkTheme.SECONDARY} />
        <AppLink to="/about" title="About" theme={AppLinkTheme.SECONDARY} />
      </div>
    </div>
  );
};

export default Navbar;
