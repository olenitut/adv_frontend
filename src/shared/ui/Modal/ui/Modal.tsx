import { FC, ReactNode, useCallback, useEffect, useRef, useState } from "react";
import classNames from "shared/lib/classNames/classNames";

import styles from "./Modal.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
};

const ANIMATION_DELAY = 300;

const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const preventPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const closeHandler = () => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  };

  const keydownHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeHandler();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", keydownHandler);
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", keydownHandler);
    };
  }, [keydownHandler]);

  return (
    <div
      className={classNames(
        styles.modal,
        isOpen && styles.open,
        isClosing && styles.isClosing
      )}
    >
      <div className={styles.overlay} onClick={closeHandler}>
        <div className={styles.content} onClick={preventPropagation}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
