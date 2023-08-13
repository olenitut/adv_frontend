import { FC, useCallback, useState } from "react";
import classNames from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";
import Button from "shared/ui/Button/ui/Button";
import { Modal } from "shared/ui/Modal";

import styles from "./Navbar.module.scss";

type NavbarProps = {
  className?: string;
};

const Navbar: FC<NavbarProps> = ({ className }) => {
  const [authModalVisible, setAuthModalVisible] = useState(false);

  const handleToggleModal = useCallback(() => {
    setAuthModalVisible((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, className)}>
      <div className={styles.links}>
        <AppLink to="/" title="Main" theme={AppLinkTheme.SECONDARY} />
        <AppLink to="/about" title="About" theme={AppLinkTheme.SECONDARY} />
        <Button onClick={handleToggleModal}>Log in</Button>
      </div>
      <Modal isOpen={authModalVisible} onClose={handleToggleModal}>
        <div>hello</div>
      </Modal>
    </div>
  );
};

export default Navbar;
