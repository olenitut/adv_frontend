import { FC, useState } from "react";
import classNames from "shared/lib/classNames/classNames";

import styles from "./SideBar.module.scss";
import { ThemeSwitch } from "widgets/ThemeSwitch";

interface ISideBArProps {
  className?: string;
}

const SideBar: FC<ISideBArProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(className, styles.sidebar, {
        [styles.collapsed]: collapsed,
      })}
    >
      <div className={styles.switchers}>
        <ThemeSwitch />
      </div>

      <button onClick={onToggle}>toggle</button>
    </div>
  );
};

export default SideBar;
